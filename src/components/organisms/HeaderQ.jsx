import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import { NavLink, Redirect } from "react-router-dom";

const { Header } = Layout;

const HeaderQ = () => {
  const [login, setLogin] = useState(false);
  const removeToken = () => {
    localStorage.removeItem("token");
    setLogin(true);
  };
  return (
    <Header id='header-q'>
      <Row gutter={16}>
        <Col sm={24} md={12}>
          <NavLink to='/'>
            <div className='logo'>
              <img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt='ANTD' />
            </div>
          </NavLink>
        </Col>
        <Col sm={24} md={12}>
          <Menu theme='light' mode='horizontal' defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }} id='menu-nav-q'>
            <Menu.Item key='1' className='menu-items-q'>
              <NavLink to='/'>Home</NavLink>
            </Menu.Item>
            <Menu.Item key='2' className='menu-items-q'>
              <NavLink to='especialidades'>Especialiades</NavLink>
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
          </Menu>
        </Col>
      </Row>
      {login && <Redirect to='/login' />}
    </Header>
  );
};

export default HeaderQ;
