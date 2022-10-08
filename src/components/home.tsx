import { UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Layout, Space } from 'antd'
import React, { useState } from 'react'
import SourceDataTable from './sourceDataTable'
import ResultTable from './resultTable'
// import { CustomerType, SalesOpportunityType } from "./types";
// import * as sourceData from "../data.json";

const { Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [getItem('Customer', '1', <UserOutlined />)]

const Homepage: React.FC = () => {
  // console.log(sourceData);
  const [collapsed, setCollapsed] = useState(false)
  const [jsonData, setJsonData] = useState<any>()

  const readFile = (e: any) => {
    console.log(e.currentTarget.files)
    let file = e.currentTarget.files[0]
    let reader = new FileReader()

    reader.readAsText(file)

    reader.onload = function () {
      setJsonData(reader.result)
      // console.log(reader.result);
    }

    reader.onerror = function () {
      console.log(reader.error)
    }
  }
  const dataForDiaplay = {
    revenue: '$519,169',
    expenses: '$411,664',
    grossProfitMargin: '22%',
    netProfitMargin: '21%',
    workingCapitalRatio: '95%',
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        className='site-layout-background'
        style={{ margin: '16px', padding: 24 }}
      >
        <Space direction='vertical' size='middle'>
          <input onChange={readFile} type='file' />
          <SourceDataTable jsonData={jsonData} setJsonData={setJsonData} />
          <ResultTable dataForDiaplay={dataForDiaplay} />
        </Space>
      </Content>
    </Layout>
  )
}

export default Homepage
