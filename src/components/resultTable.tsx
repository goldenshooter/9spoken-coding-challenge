import { Card, Descriptions } from 'antd'
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
    formattedRevenue,
    formattedExpenses,
    grossProfitMargin,
    netProfitMargin,
    workingCapitalRatio,
  } = getResultFromSourceData(dataList)

  return (
    <Card title='Result'>
      <Descriptions bordered>
        <Descriptions.Item label='Revenue'>
          {formattedRevenue}
        </Descriptions.Item>
        <Descriptions.Item label='Expenses'>
          {formattedExpenses}
        </Descriptions.Item>
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
    </Card>
  )
}

export default ResultTable
