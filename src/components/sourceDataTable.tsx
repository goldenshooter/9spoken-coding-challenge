import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'

interface SourceDataTableProps {
  jsonData: string | undefined
  setJsonData: (jsonData: any) => void
}

interface DataType {
  account_category: string
  account_code: string
  account_currency: string
  account_identifier: string
  account_status: string
  value_type: string
  account_name: string
  account_type: string
  account_type_bank: string
  system_account: string
  total_value: number
}

function SourceDataTable({ jsonData, setJsonData }: SourceDataTableProps) {
  console.log(typeof jsonData)
  const convertedJson = JSON.parse(jsonData || '{}')
  console.log(convertedJson)
  // @ts-ignore
  const dataForDiaplay = convertedJson?.data || []
  console.log(dataForDiaplay)
  const columns: ColumnsType<DataType> = [
    {
      title: 'Account category',
      dataIndex: 'account_category',
    },
    {
      title: 'Account code',
      dataIndex: 'account_code',
    },
    {
      title: 'Account currency',
      dataIndex: 'account_currency',
    },
    {
      title: 'Status',
      dataIndex: 'account_status',
      render: (status, record) => (
        <>
          {status === 'ACTIVE' && <CheckCircleTwoTone twoToneColor='green' />}
          {status === 'INACTIVE' && <CloseCircleTwoTone twoToneColor='red' />}
        </>
      ),
    },
    {
      title: 'Value type',
      dataIndex: 'value_type',
    },
    {
      title: 'Account name',
      dataIndex: 'account_name',
    },
    {
      title: 'Account type',
      dataIndex: 'account_type',
    },
    {
      title: 'Account type bank',
      dataIndex: 'account_type_bank',
    },
    {
      title: 'System account',
      dataIndex: 'system_account',
    },
    {
      title: 'Total value',
      dataIndex: 'total_value',
      // display this value with formatter
      // render: (_, record) => (
      //   <Space size="large">
      //     <EditTwoTone onClick={() => editOnClick(record)} />
      //     <DeleteTwoTone
      //       twoToneColor="red"
      //       onClick={() => deleteOnClick(record)}
      //     />
      //   </Space>
      // ),
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={dataForDiaplay}
      data-testid='customer-table-table'
      rowKey={(record) => record.account_identifier}
      title={() => 'External Data'}
    />
  )
}

export default SourceDataTable
