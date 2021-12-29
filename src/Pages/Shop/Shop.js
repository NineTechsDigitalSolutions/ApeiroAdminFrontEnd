import Layout from "./../../Layout/LayoutMain";
import { Image, Typography, Button } from "antd";
import DataTable from "./../../Components/Table/DataTable";
import { useState } from "react";
import { useEffect } from "react";
import equip1 from "../../Assets/equip1.jpg";
import equip2 from "../../Assets/equip2.jpg";
import { EditFilled } from "@ant-design/icons";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
const Shop = () => {
  const [data, setData] = useState(null);
  const history = useHistory();
  useEffect(() => {
    let tempArr = [];
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        image:
          i % 2 === 0 ? (
            <Image src={equip1} height={100} width={100} />
          ) : (
            <Image src={equip2} height={100} width={100} />
          ),
        name: i % 2 === 0 ? "Amazon E-Kindle" : "Mi Kindle",
        category: i % 2 === 0 ? "E-Book" : "E-Newspaper",
        price: i % 2 === 0 ? "$500" : "$300",
        description:
          i % 2 === 0
            ? "lorem ipsum dolor sit amet"
            : "lorem ipsum dolor sit amet",
        action: (
          <div className="actions-buttons">
            <Button
              shape={"circle"}
              icon={<EditFilled />}
              onClick={() => history.push("/add-new-product")}
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
      title: "Sr No",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: "Product Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
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
    <Layout active={"products"}>
      <div className="white-card">
        <Typography.Title level={2}>Shop</Typography.Title>
        <div className="justify-between">
          <Typography.Title level={5}>Products</Typography.Title>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => history.push("/add-new-product")}
          >
            Add New Book
          </Button>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
};

export default Shop;
