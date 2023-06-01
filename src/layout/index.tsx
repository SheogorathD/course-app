// import { useEffect } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { Dropdown, Layout } from "antd";
import type { MenuProps } from "antd";
import { PROFILE, COURSES, ADD_COURSE } from "@/router/routes";
import {
  BellOutlined,
  ExportOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./styles.scss";

const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  {
    key: "settings",
    label: (
      <NavLink to={"/settings"}>
        <SettingOutlined />
        <span>Налаштування</span>
      </NavLink>
    ),
  },
  {
    key: "logOut",
    label: (
      <NavLink to={"/logout"}>
        <ExportOutlined />
        <span>Вийти з акаунту</span>
      </NavLink>
    ),
  },
];

const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <nav className="Navbar">
          <ul className="Navbar__links">
            <li>
              <NavLink to={PROFILE}>Мій Профіль</NavLink>
            </li>
            <li>
              <NavLink to={COURSES}>Каталог Курсів</NavLink>
            </li>
            <li>
              <NavLink to={ADD_COURSE}>Додати Курс</NavLink>
            </li>
          </ul>

          <ul className="Navbar__links">
            <li>
              <SearchOutlined />
            </li>
            <li>
              <BellOutlined />
            </li>
            <li>
              <Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
                <a onClick={(e) => e.preventDefault}>
                  <UserOutlined />
                </a>
              </Dropdown>
            </li>
          </ul>
          {/* <Search /> */}
        </nav>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
