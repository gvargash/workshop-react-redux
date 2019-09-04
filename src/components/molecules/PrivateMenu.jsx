import React, { useState } from "react";
import { Menu } from "antd";
import { Redirect, NavLink } from "react-router-dom";

const PrivateMenu = () => {
  const [login, setLogin] = useState(false);

  const removeToken = () => {
    localStorage.removeItem("token");
    setLogin(true);
  };

  return (
    <>
      <Menu theme='light' mode='horizontal' defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }} id='menu-nav-q'>
        <Menu.Item key='1' className='menu-items-q'>
          <NavLink to='/'>Home</NavLink>
        </Menu.Item>
        <Menu.Item key='2' className='menu-items-q'>
          <NavLink to='/especialidades'>Especialiades</NavLink>
        </Menu.Item>
        <Menu.Item key='3' className='menu-items-q'>
          <NavLink to='/cursos'>Cursos</NavLink>
        </Menu.Item>
        <Menu.Item key='4' className='icon-burgger-menu'>
          <NavLink to='/profesores'>Profesores</NavLink>
        </Menu.Item>
        <Menu.Item key='5' className='icon-burgger-menu' onClick={() => removeToken()}>
          Cerra sesión
        </Menu.Item>
        {login && <Redirect to='/login' />}
      </Menu>
    </>
  );
};

export default PrivateMenu;
