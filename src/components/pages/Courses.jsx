import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../organisms/Banner";
import store from "../../redux/store";
import { getAllCourses } from "../../redux/actionCreators";
import { Card, Row, Col } from "antd";
const { Meta } = Card;
const Courses = ({ courses }) => {
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, []);

  return (
    <>
      <Banner
        title='Lineas de especialidad construidas a base de nuestra metodologia ed-core 2.0'
        image={{
          src:
            "https://images.unsplash.com/photo-1566568520656-5d720b27d046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          alt: "Banner Especialidades"
        }}></Banner>
      {courses && (
        <main className='couses'>
          <Row gutter={16}>
            {courses.map(course => (
              <Col span={6} key={course.id}>
                <Link to={`curso/${course.id}`}>
                  <Card hoverable cover={<img alt={course.name} src={course.picture} />}>
                    <Meta title={course.name} description={course.subtitle} />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
});

export default connect(
  mapStateToProps,
  {}
)(Courses);
