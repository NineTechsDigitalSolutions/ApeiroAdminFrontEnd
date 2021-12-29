import { DeleteFilled, EditFilled, PlusCircleFilled } from "@ant-design/icons";
import { Typography, Button } from "antd";
import LayoutMain from "./../../Layout/LayoutMain";
import { useEffect, useState } from "react";
import DataTable from "../../Components/Table/DataTable";
import CategoryModal from "../../Components/Modal/CategoryModal";
import SubCategoryModal from "./../../Components/Modal/SubCategoryModal";
const Categories = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let tempArr = [];
    //     const categories = JSON.parse(localStorage.getItem("categories"));
    // if(categories){
    //   categories.map((item, i) => {
    //     tempArr.push({
    //       key: i,
    //       srno: i,
    //       main: i % 2 === 0 ? "E-Book" : "E-Magazine",
    //       sub: "sub category of some category",

    //       action: (
    //         <div className="actions-buttons">
    //           <Button shape={"circle"} icon={<EditFilled />} />
    //           <Button
    //             shape={"circle"}
    //             icon={<DeleteFilled className="color-red" />}
    //           />
    //         </div>
    //       ),
    //     });
    //   });

    // }else{
    [1, 2, 3, 4].map((item, i) => {
      tempArr.push({
        key: i,
        srno: i,
        main: i % 2 === 0 ? "E-Book" : "E-Magazine",
        category: "Novels",
        sub: "children, youth",

        action: (
          <div className="actions-buttons">
            <Button shape={"circle"} icon={<EditFilled />} />
            <Button
              shape={"circle"}
              icon={<DeleteFilled className="color-red" />}
            />
          </div>
        ),
      });
    });
    //   localStorage.setItem("categories", JSON.stringify(tableData.librarians));
    // }
    setData(tempArr);
  }, []);
  const columns = [
    {
      title: "Sr No",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: "Materials",
      dataIndex: "main",
      key: "main",
    },
    {
      title: "Category Name",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Sub Categories",
      dataIndex: "sub",
      key: "sub",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <LayoutMain active={"categories"}>
      <div className="white-card">
        <Typography.Title level={2}>Categories</Typography.Title>
        <div className="ml-left-flex">
          <CategoryModal />
          <SubCategoryModal />
        </div>
        <div>
          <DataTable
            columns={columns}
            data={data}
            width={600}
            pagination={false}
          />
        </div>
      </div>
    </LayoutMain>
  );
};

export default Categories;
