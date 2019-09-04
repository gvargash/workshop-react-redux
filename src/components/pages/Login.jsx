import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox, Col, Row, message } from "antd";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

const Login = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const [loginState, setloginState] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    validateFields(async (err, values) => {
      try {
        if (!err) {
          const data = { email: values.email, password: values.password };
          const response = await Axios.post(`${process.env.REACT_APP_API_USER}/login`, data);
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            setloginState(true);
          }
        }
      } catch (error) {
        message.error("Error al inciar sesion");
      }
    });
  };

  return (
    <>
      <Row type='flex' justify='center'>
        <Col>
          <Form onSubmit={handleSubmit} className='login-form' id='components-login-form-q'>
            <div className='header-q'>
              <h1>Iniciar sesión</h1>
            </div>

            <Form.Item>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Por favor Ingresa tu correo!" }]
              })(<Input prefix={<Icon type='mail' style={{ color: "rgba(0,0,0,.25)" }} />} type='email' placeholder='correo@gmail.com' />)}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Por favor Ingresa tu Password!" }]
              })(<Input prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />} type='password' placeholder='Password' />)}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Recuerdame</Checkbox>)}
              <Link className='login-form-forgot' to=''>
                Olvide mi contraseña
              </Link>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                Iniciar sesión
              </Button>
              O <Link to='/register'>Registrate ahora!</Link>
            </Form.Item>
            {loginState && <Redirect to='/'></Redirect>}
          </Form>
        </Col>
      </Row>
    </>
  );
};
const WrappedLoginForm = Form.create({ name: "login_form" })(Login);

export default WrappedLoginForm;
