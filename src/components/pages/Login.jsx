import React from "react";
import { Form, Icon, Input, Button, Checkbox, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Login = props => {
  const { getFieldDecorator, validateFields } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  
  return (
    <>
      <Row type="flex" justify="center">
        <Col>
          <Form onSubmit={handleSubmit} className="login-form" id="components-login-form-q">
            <div className="header-q">
              <h1>Iniciar sesión</h1>
            </div>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Por favor Ingresa tu username!" }]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Por favor Ingresa tu Password!" }]
              })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Recuerdame</Checkbox>)}
              <Link className="login-form-forgot" to="">
                Olvide mi contraseña
              </Link>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Iniciar sesión
              </Button>
              O <Link to="/register">Registrate ahora!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
const WrappedLoginForm = Form.create({ name: "login_form" })(Login);

export default WrappedLoginForm;
