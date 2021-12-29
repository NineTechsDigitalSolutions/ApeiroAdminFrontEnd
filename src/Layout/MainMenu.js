import {
  HomeOutlined,
  UserOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
  BookOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  BellFilled,
  SettingOutlined,
  ShopFilled,
  BankFilled,
  PieChartFilled,
} from "@ant-design/icons";
import { FaExchangeAlt, MdPayment } from "react-icons/all";
import { Menu, Typography, Select, Divider } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const MainMenu = ({ active }) => {
  const { Option } = Select;
  const layout = useSelector((state) => state.themeReducer.layout);
  const [openKeys, setOpenKeys] = useState(["notification", "settings"]);
  const { SubMenu } = Menu;
  const isAdmin = useSelector((state) => state.themeReducer.isAdmin);
  console.log(isAdmin);
  useEffect(() => {
    // if (!collapsed) {
    // setOpenKeys([active]);
    // }
  }, [active]);
  const onOpenChange = (items) => {
    console.log(items);
    if (items.includes("notification")) {
      const index = items.indexOf("notification");
      setOpenKeys((prev) => prev.splice(index, 1));
    } else if (items.includes("settings")) {
      const index = items.indexOf("settings");
      setOpenKeys((prev) => prev.splice(index, 1));
    }
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Menu
        theme="dark"
        mode={layout === "vertical" ? "inline" : "horizontal"}
        defaultSelectedKeys={active}
        style={
          layout === "vertical"
            ? {
                height: "100vh",
                background: "var(--sidebar-bg-color)",
                padding: "10px",
              }
            : { background: "var(--header-color)" }
        }
      >
        <Menu.Item
          key="select"
          icon={<FaExchangeAlt className="icon-size-22" />}
          style={{ background: "var(--menu-bg-color)", borderRadius: "10px" }}
        >
          <Select
            defaultValue="English"
            style={{ width: "100%" }}
            onChange={handleChange}
            className="sider-selector"
            showArrow={false}
          >
            <Option value="sinhala">Sinhala</Option>
            <Option value="english">English</Option>
            <Option value="all">All</Option>
          </Select>
        </Menu.Item>
        <Divider />
        {/* {isAdmin ? ( */}
        <>
          <Menu.Item
            key="home"
            icon={<HomeOutlined className="icon-size-22" />}
          >
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item
            key="librarians"
            icon={<UsergroupAddOutlined className="icon-size-22" />}
          >
            <Link to={"/librarians"}>Librarians</Link>
          </Menu.Item>
          <Menu.Item
            key="readers"
            icon={<ReadOutlined className="icon-size-22" />}
          >
            <Link to={"/readers"}>Readers</Link>
          </Menu.Item>
          <Menu.Item
            key="categories"
            icon={<ApartmentOutlined className="icon-size-22" />}
          >
            <Link to={"/categories"}>Categories</Link>
          </Menu.Item>
          <Menu.Item
            key="books"
            icon={<BookOutlined className="icon-size-22" />}
          >
            <Link to={"/books"}>Books</Link>
          </Menu.Item>
          <Menu.Item
            key="authors"
            icon={<UserOutlined className="icon-size-22" />}
          >
            <Link to={"/authors"}>Authors</Link>
          </Menu.Item>
          <Menu.Item
            key="sales"
            icon={<SafetyCertificateOutlined className="icon-size-22" />}
          >
            <Link to={"/sales"}>Sales</Link>
          </Menu.Item>
          <Menu.Item
            key="payments"
            icon={<MdPayment className="icon-size-22" />}
          >
            <Link to={"/payments"}>Payments</Link>
          </Menu.Item>
          <Menu.Item
            key="statics"
            icon={<PieChartFilled className="icon-size-22" />}
          >
            <Link to={"/statistics"}>Statistics</Link>
          </Menu.Item>
          <SubMenu
            key="notification"
            icon={<BellFilled className="icon-size-22" />}
            title="Notifications"
          >
            <Menu.Item key="1">
              <Link to={"/customer-care"}>Customer Care</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to={"/bulk"}>Bulk Notifications</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="settings"
            icon={<SettingOutlined className="icon-size-22" />}
            title="Settings"
          >
            <Menu.Item key="m-settings">
              <Link to={"/mobile-settings"}>Mobile Settings</Link>
            </Menu.Item>
            <Menu.Item key="p-settings">
              <Link to={"/packages"}>Packages</Link>
            </Menu.Item>
            <Menu.Item key="g-settings">
              <Link to={"/general-settings"}>General Settings</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="shop"
            icon={<ShopFilled className="icon-size-22" />}
            title="Shop"
          >
            <Menu.Item key="products">
              <Link to={"/products"}>Products</Link>
            </Menu.Item>
            <Menu.Item key="orders">
              <Link to={"/orders"}>Orders</Link>
            </Menu.Item>
          </SubMenu>
        </>
        {/* ) : (
           <>
             <Menu.Item
              key="librarians"
              icon={<UsergroupAddOutlined className="icon-size-22" />}
            >
              <Link to={"/librarians"}>Librarians</Link>
            </Menu.Item>
            <Menu.Item
              key="readers"
              icon={<ReadOutlined className="icon-size-22" />}
            >
              <Link to={"/readers"}>Readers</Link>
            </Menu.Item>
            <Menu.Item
              key="books"
              icon={<BookOutlined className="icon-size-22" />}
            >
              <Link to={"/books"}>Books</Link>
            </Menu.Item>
          </>
        )} */}
      </Menu>
    </div>
  );
};

export default MainMenu;
