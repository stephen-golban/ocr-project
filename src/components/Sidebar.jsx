import React from "react";
import { Menu } from "antd";
import {
  DesktopOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <Menu className="sidebar" defaultSelectedKeys={["1"]} theme="dark" mode="inline" inlineCollapsed={true}>
      <div className="logo">
        <FileSearchOutlined />
      </div>
      <Menu.Item key="1" icon={<DesktopOutlined />}>
        Dashboard
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
