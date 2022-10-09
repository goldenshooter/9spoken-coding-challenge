import { Descriptions } from 'antd'
import React from 'react'
import { getResultFromSourceData } from './helperFunctions'
import { DatalistType } from './types'

interface ResultTableProps {
  jsonData: string | undefined
}

function ResultTable({ jsonData }: ResultTableProps) {
  const convertedJson: DatalistType = JSON.parse(jsonData || '{}')
  const dataList = convertedJson?.data || []
  const {
    revenue,
    expenses,
    grossProfitMargin,
    netProfitMargin,
    workingCapitalRatio,
  } = getResultFromSourceData(dataList)

  return (
    <Descriptions title='Result' bordered>
      <Descriptions.Item label='Revenue'>{revenue}</Descriptions.Item>
      <Descriptions.Item label='Expenses'>{expenses}</Descriptions.Item>
      <Descriptions.Item label='Gross Profit Margin'>
        {grossProfitMargin}
      </Descriptions.Item>
      <Descriptions.Item label='Net Profit Margin'>
        {netProfitMargin}
      </Descriptions.Item>
      <Descriptions.Item label='Working Capital Ratio'>
        {workingCapitalRatio}
      </Descriptions.Item>
    </Descriptions>
  )
}

export default ResultTable
