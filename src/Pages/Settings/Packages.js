import Layout from "./../../Layout/LayoutMain";
import { Typography, Button } from "antd";
import DataTable from "../../Components/Table/DataTable";
import { useState, useEffect } from "react";
import { EditFilled, PlusCircleFilled } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";
import { useHistory } from "react-router";
const Packages = () => {
  const [data, setData] = useState(null);
  const history = useHistory();
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        id: i,
        name: i % 2 === 0 ? "Gold" : "Silver",
        duration: `${i}Months`,
        amount: i % 2 === 0 ? "$400" : "$200",
        description: "lorem ipsum dolor sit amet",
        action: (
          <div className="actions-buttons">
            <Button
              shape={"circle"}
              icon={<EditFilled />}
              onClick={() => history.push("/add-package")}
            />
            <Button
              shape={"circle"}
              icon={<DeleteFilled className="color-red" />}
            />
          </div>
        ),
      });
    });
    setData(tempArr);
  }, []);
  const columns = [
    {
      title: "Package Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Package Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Package Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <Layout active="p-settings">
      <div className="white-card">
        <div className="justify-between">
          <Typography.Title level={2}>Packages</Typography.Title>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            onClick={() => history.push("/add-package")}
          >
            Add New Package
          </Button>
        </div>
        <DataTable columns={columns} data={data} width={800} />
      </div>
    </Layout>
  );
};

export default Packages;
