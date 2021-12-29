import Layout from "./../../Layout/LayoutMain";
import { Typography } from "antd";
import { EditFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";
import DataTable from "../../Components/Table/DataTable";
const Sales = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        date: "2022-12-11",
        id: "1234567",
        name: i % 2 === 0 ? "Yasir" : "Hassan",
        total: i % 2 === 0 ? "$479" : "$200",
        type: i % 2 === 0 ? "Renewal Gold" : "Silver",
        status:
          i % 2 === 0 ? (
            <span className="color-red">Transaction Fail</span>
          ) : (
            <span className="color-green">Transaction Success</span>
          ),
      });
    });
    setData(tempArr);
  }, []);
  const columns = [
    {
      title: "Sr No",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: "Transaction Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Transaction ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Reader Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Total Amount",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Payment Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Payment Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <Layout active={"sales"}>
      <div className="white-card">
        <Typography.Title level={2}>Sales</Typography.Title>
        <DataTable columns={columns} data={data} width={1200} />
      </div>
    </Layout>
  );
};

export default Sales;
