import { SearchOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const DataTable = ({ data, columns, width, pagination, selection }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys([...selectedRowKeys, ...selectedRows]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <>
      <div className="table-search-inp mt-30">
        <Input prefix={<SearchOutlined />} placeholder="search" />
      </div>
      <Table
        className="data-table"
        columns={columns}
        dataSource={data}
        rowSelection={selection ? rowSelection : null}
        pagination={pagination}
        scroll={{ x: width ? width : "auto" }}
        loading={data && data ? false : true}
      />{" "}
    </>
  );
};

export default DataTable;
