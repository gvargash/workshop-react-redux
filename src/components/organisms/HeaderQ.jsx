import React from "react";
import { Layout, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import PrivateMenu from "./../molecules/PrivateMenu";
import PublicMenu from "./../molecules/PublicMenu";

const { Header } = Layout;

const HeaderQ = () => {
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
          {localStorage.getItem("token") ? <PrivateMenu /> : <PublicMenu />}
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderQ;
