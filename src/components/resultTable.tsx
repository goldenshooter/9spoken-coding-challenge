import { Descriptions } from "antd";
import React from "react";

interface ResultTableProps {
  dataForDiaplay: object;
}

function ResultTable({ dataForDiaplay }: ResultTableProps) {
  // console.log(dataForDiaplay);

  //   revenue: "$519,169",
  //   expenses: "$411,664",
  //   grossProfitMargin: "22%",
  //   netProfitMargin: "21%",
  //   workingCapitalRatio: "95%",
  return (
    <Descriptions title="Result" bordered>
      <Descriptions.Item label="Revenue">$510,169</Descriptions.Item>
      <Descriptions.Item label="Expenses">$411,664</Descriptions.Item>
      <Descriptions.Item label="Gross Profit Margin">22%</Descriptions.Item>
      <Descriptions.Item label="Net Profit Margin">21%</Descriptions.Item>
      <Descriptions.Item label="Working Capital Ratio"> 95%</Descriptions.Item>
    </Descriptions>
  );
}

export default ResultTable;
