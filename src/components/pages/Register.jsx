import React from "react";
import { Form, Icon, Input, Button, Col, Row } from "antd";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

const Register = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    validateFields(async (err, values) => {
      try {
        if (!err) {
          const data = {
            email: values.email,
            name: values.name,
            password: values.password
          };
          const resp = await Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data);
          if (resp.data) {
            return <Redirect to='/login' />;
          }
        }
      } catch (error) {
        console.log("error:", error.message);
      }
    });
  };

  return (
    <>
      <Row type='flex' justify='center'>
        <Col span={6}>
          <Form onSubmit={handleSubmit} className='register-form' id='components-register-form-q'>
            <div className='header-q'>
              <h1>Crear cuenta</h1>
            </div>

            <Form.Item>
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "Por favor Ingresa tu nombre!" }]
              })(<Input prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />} placeholder='Raul Romeor' />)}
            </Form.Item>

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
              <Button type='primary' htmlType='submit' block className='login-form-button'>
                Registrar cuenta
              </Button>
              O <Link to='/login'>Iniciar sesión!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
const FormRegister = Form.create({ name: "register_form" })(Register);
export default FormRegister;
