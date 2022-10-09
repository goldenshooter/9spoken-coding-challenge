import { Card, Layout, Space } from 'antd'
import React, { useState } from 'react'
import SourceDataTable from './sourceDataTable'
import ResultTable from './resultTable'

const { Content } = Layout

const Homepage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>()

  const readFile = (e: any) => {
    console.log(e.currentTarget.files)
    let file = e.currentTarget.files[0]
    let reader = new FileReader()

    reader.readAsText(file)
    reader.onload = function () {
      setJsonData(reader.result)
      console.log(reader.result)
    }

    reader.onerror = function () {
      console.log(reader.error)
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px', padding: 24 }}>
        <Space direction='vertical' size='middle'>
          <Card title='Choose a json file'>
            <input onChange={readFile} type='file' accept='.json' />
          </Card>
          <SourceDataTable jsonData={jsonData} setJsonData={setJsonData} />
          <ResultTable jsonData={jsonData} />
        </Space>
      </Content>
    </Layout>
  )
}

export default Homepage
