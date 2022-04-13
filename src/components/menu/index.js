import React from "react";
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "antd";
// import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from "@ant-design/icons";
import * as icons from "@ant-design/icons";
import routes from "../../router";
import Header from "../header";
import "./index.less";

const { SubMenu } = Menu;

// 把 children 数组形式 解析 层单列
const routeArrayFlat = (routeArray) => routeArray.reduce((pre, current) => (current.children && current.children.length ? pre.concat(routeArrayFlat(current.children)) : pre.concat(current)), []);

export default class App extends React.Component {
  state = {
    collapsed: false,
    menuWidth: 256,
    rightContent: React.createRef(),
    defaultMenuKeys: JSON.parse(localStorage.getItem("MENUKEYPATH")) || ["jsxUse"],
  };
  changeMenu(menuInfo) {
    // console.log(menuInfo);
    let { item, key, keyPath, domEvent } = menuInfo;
    localStorage.setItem("MENUKEYPATH", JSON.stringify(keyPath));
  }
  // 递归渲染menu
  renderMenu(menuList) {
    return (menuList || []).map(({ name, path, children, component, title, icon }) => {
      if (children && children.length) {
        return (
          <SubMenu key={name} icon={icon ? icons[icon].render() : ""} title={title}>
            {/* {children.map((m) => {
            return (
              <Menu.Item key={m.name}>
                <Link to={m.path}>{m.title}</Link>
              </Menu.Item>
            );
          })} */}
            {this.renderMenu(children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={name} icon={icon ? icons[icon].render() : ""} onClick={this.changeMenu}>
            <Link to={path}>{title}</Link>
          </Menu.Item>
        );
      }
    });
  }

  toggleCollapsed = () => {
    let { collapsed } = this.state;
    this.setState(
      {
        menuWidth: collapsed ? 256 : 80,
        collapsed: !collapsed,
      },
      () => {
        this.state.rightContent.current.style.width = `calc(100% - ${collapsed ? 256 : 80}px)`;
      }
    );
  };

  render() {
    return (
      <div className="app-wrapper">
        <Header onChange={this.toggleCollapsed} collapsed={this.state.collapsed}></Header>
        <div style={{ width: this.state.menuWidth }}>
          <Menu className="menu-content" defaultSelectedKeys={this.state.defaultMenuKeys} defaultOpenKeys={this.state.defaultMenuKeys} mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>
            {/* {(routes || []).map(({ name, path, children, component, title, icon }) => {
              console.log(title);
              if (children && children.length) {
                return (
                  <SubMenu key={name} icon={icon ? icons[icon].render() : ""} title={title}>
                    {children.map((m) => {
                      return (
                        <Menu.Item key={m.name}>
                          <Link to={m.path}>{m.title}</Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={name} icon={icon ? icons[icon].render() : ""}>
                    <Link to={path}>{title}</Link>
                  </Menu.Item>
                );
              }
            })} */}
            {this.renderMenu(routes)}
          </Menu>
        </div>
        <div className="right-content" ref={this.state.rightContent}>
          <Switch>
            {/* {console.log(routeArrayFlat(routes))} */}
            {routeArrayFlat(routes).map(({ name, path, children, component }) => {
              return <Route path={path} component={component} key={name} exact></Route>;
            })}
            <Redirect to="/clock" />
          </Switch>
        </div>
      </div>
    );
  }
}
