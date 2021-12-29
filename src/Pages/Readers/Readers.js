import Layout from "./../../Layout/LayoutMain";
import { Typography, Select, Button } from "antd";
import DataTable from "../../Components/Table/DataTable";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
const Readers = () => {
  const { Option } = Select;

  const history = useHistory();

  const [data, setData] = useState(null);
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: item,
        srno: i,
        name: "hassan",
        email: i % 2 === 0 ? "hassan@gmail.com" : "yasira@gmail.com",
        type: i % 2 === 0 ? "Gold" : "silver",
        status: i % 2 === 0 ? "Active" : "Inactive",
        action: (
          <div className="actions-buttons">
            <Button shape={"circle"} icon={<EditFilled />} />
            <Button
              shape={"circle"}
              icon={<DeleteFilled className="color-red" />}
              onClick={() => handleDeleteItem(i)}
            />
          </div>
        ),
      });
    });
    setData(tempArr);
  }, []);
  const handleDeleteItem = (key) => {
    // let arr = [];
    console.log(key);
    let deleted = data?.filter((value, i) => {
      // if (i === key) {
      //   console.log(key);
      // }
      return i !== key;
      // return value.key !== key;
    });
    // console.log(arr);
    setData(deleted);
  };
  const columns = [
    {
      title: "Sr No",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Membership Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Renewed Date",
      dataIndex: "rDate",
      key: "rDate",
    },

    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <Layout active="readers">
      <div className="white-card readers-main">
        <Typography.Title level={2}>Readers</Typography.Title>
        <div className="select-lib">
          <Button type="primary" onClick={() => history.push("/add-user")}>
            Add User
          </Button>
          {/* <p>Select Library</p>

          <Select
            defaultValue="English"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="sinhala">Sinhala</Option>
            <Option value="english">English</Option>
            <Option value="all">All</Option>
          </Select> */}
        </div>
        <DataTable
          columns={columns}
          data={data}
          width={800}
          pagination={true}
        />
      </div>
    </Layout>
  );
};

export default Readers;
