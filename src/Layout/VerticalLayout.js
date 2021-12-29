import React, { useState } from "react";

import { Layout, Menu, Dropdown, Button } from "antd";
import { MdRealEstateAgent } from "react-icons/md";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  PropertySafetyOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import MainMenu from "./MainMenu";

const VerticalLayout = ({ children, active }) => {
  const { Header, Sider, Content } = Layout;
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu>
      <Menu.Item
        icon={<LogoutOutlined />}
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="v-layout">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={210}
          // collapsedWidth={0}
          // onMouseOver={() => setCollapsed(false)}
          // onMouseOut={() =>   setCollapsed(true)}
          style={{
            height: "auto",
            background: "var(--sidebar-bg-color)",
          }}
        >
          <div className="logo"></div>

          <MainMenu active={active} />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0 }}>
            <div className="header-row">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
              <span>
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement={"bottomLeft"}
                >
                  <span className="header-action">
                    <UserOutlined />
                  </span>
                </Dropdown>
              </span>
            </div>
          </Header>
          <Content
            // className="site-layout-background"
            style={{
              padding: "48px 40px",
              // padding: 24,
              // minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default VerticalLayout;
