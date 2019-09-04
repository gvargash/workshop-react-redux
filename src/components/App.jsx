import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Protected from "./Routes/Protected";
import Public from "./Routes/Public";
import Home from "./pages/Home";
import Specialities from "./pages/Specialities";
import Speciality from "./pages/Speciality";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Teachers from "./pages/Teachers";
import Fragment from "./pages/Fragment";
import FormRegister from "./pages/Register";
import Page404 from "./pages/Page404";
import WrappedLoginForm from "./pages/Login";
import HeaderQ from "./organisms/HeaderQ";
const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className='layout' id='layout-template-q'>
        <HeaderQ />
        <Content className='main-container-q'>
          <div style={{ padding: 24, minHeight: "100vh" }}>
            <Switch>
              <Protected path='/' exact component={Home} />
              <Protected path='/especialidades' exact component={Specialities} />
              <Protected path='/especialidades/:id' component={Speciality} />
              <Protected path='/cursos' exact component={Courses} />
              <Protected path='/cursos/:id' component={Course} />
              <Protected path='/profesores' exact component={Teachers} />
              <Protected path='/clase/:id' component={Fragment} />

              <Public path='/login' exact component={WrappedLoginForm} />
              <Public path='/register' exact component={FormRegister} />

              <Route component={Page404} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>UED</Footer>
      </Layout>
    </Router>
  );
};
export default App;
