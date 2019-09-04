import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
const PublicMenu = () => {
  return (
    <>
      <Menu theme='light' mode='horizontal' defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }} id='menu-nav-q'>
        <Menu.Item key='1' className='menu-items-q'>
          <NavLink to='/login'>Login</NavLink>
        </Menu.Item>
        <Menu.Item key='2' className='menu-items-q'>
          <NavLink to='/register'>Registro</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default PublicMenu;
