import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/charts";

const DonutChart = () => {
  const data = [
    {
      type: "The Last Pikachu",
      value: 27,
    },
    {
      type: "Rainy Clouds",
      value: 25,
    },
    {
      type: "Living On The Edge",
      value: 18,
    },
    {
      type: "Escape",

      value: 15,
      text: "red",
    },
    {
      type: "white",
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    // theme: "dark",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pres-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "17px",
          fontWeight: "normal",
          color: "var(--text-color)",
        },
        content: "Highest Reading Books",
      },
    },
  };
  return <Pie {...config} />;
};
export default DonutChart;
