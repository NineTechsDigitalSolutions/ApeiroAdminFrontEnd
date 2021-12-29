import Layout from "../../Layout/LayoutMain";
import { Button, Typography } from "antd";
import DataTable from "../../Components/Table/DataTable";
import { useEffect } from "react";
import { useState } from "react";
import tableData from "../../tableData.json";
import { useHistory } from "react-router";
import {
  PlusOutlined,
  EditFilled,
  DeleteFilled,
  EyeFilled,
} from "@ant-design/icons";

const Librarians = () => {
  const { Title } = Typography;
  const [data, setData] = useState();
  const history = useHistory();

  useEffect(() => {
    let tempArr = [];
    const librarians = JSON.parse(localStorage.getItem("librarian"));
    if (librarians) {
      librarians.map((user, i) => {
        tempArr.push({
          key: i,
          srno: i,
          name: user.name,
          nic: user.nic,
          contact: i % 2 === 0 ? "0300" : "0324",
          email: i % 2 === 0 ? "hassan@gmail.com" : "khizram@gmail.com",
          access: "Menu,Book,Readers",
          library: i % 2 === 0 ? "sinhala" : "english",
          service: user.service,
          status:
            i % 2 === 0 ? (
              <span className="green">Active</span>
            ) : (
              <span className="red">Inactive</span>
            ),
          action: (
            <div className="actions-buttons">
              <Button shape={"circle"} icon={<EyeFilled />} />
              <Button
                shape={"circle"}
                icon={<EditFilled />}
                onClick={() => history.push("/add-new")}
              />
              <Button
                shape={"circle"}
                icon={<DeleteFilled className="color-red" />}
                onClick={() => handleDeleteItem(i)}
              />
            </div>
          ),
        });
      });
    } else {
      tableData.librarians.map((user, i) => {
        tempArr.push({
          key: i,
          srno: i,
          name: user.name,
          nic: user.nic,
          contact: i % 2 === 0 ? "0300" : "0324",
          email: i % 2 === 0 ? "hassan@gmail.com" : "khizram@gmail.com",
          access: "Menu,Book,Readers",
          library: i % 2 === 0 ? "sinhala" : "english",
          service: user.service,
          status:
            i % 2 === 0 ? (
              <span className="green">Active</span>
            ) : (
              <span className="red">Inactive</span>
            ),
          action: (
            <div className="actions-buttons">
              <Button shape={"circle"} icon={<EyeFilled />} />
              <Button
                shape={"circle"}
                icon={<EditFilled />}
                onClick={() => history.push("/add-new")}
              />
              <Button
                shape={"circle"}
                icon={<DeleteFilled className="color-red" />}
                onClick={() => handleDeleteItem(i)}
              />
            </div>
          ),
        });
      });
      localStorage.setItem("librarian", JSON.stringify(tableData.librarians));
    }

    setData(tempArr);
  }, []);
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
      title: "NIC",
      dataIndex: "nic",
      key: "nic",
    },
    {
      title: "Contact No",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Menu Access",
      dataIndex: "access",
      key: "access",
    },
    {
      title: "Library",
      dataIndex: "library",
      key: "library",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  const handleDeleteItem = (key) => {
    // console.log(key);
    let deleted = data?.filter((value, i) => {
      console.log(i);
      return i !== key;
    });
    console.log(deleted);
    // setData(deleted);
  };
  return (
    <Layout active="librarians">
      <div className="white-card librarians">
        <Title level={2}>Librarians</Title>
        <div className="top-btns">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => history.push("/add-new")}
          >
            Add New
          </Button>
          <div>
            <Button className="white bg-blue">All</Button>
            <Button className="white bg-green">Active</Button>
            <Button className="white bg-yellow">Inactive</Button>
            <Button className="white bg-red">Expired</Button>
          </div>
        </div>
        <div>
          <DataTable columns={columns} data={data} width={1200} />
        </div>
      </div>
    </Layout>
  );
};

export default Librarians;
