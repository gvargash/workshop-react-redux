import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "./../../redux/store";
import { getCourse } from "./../../redux/actionCreators";
import Banner from "../organisms/Banner";
import { Divider } from "antd";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  useEffect(() => {
    store.dispatch(getCourse(1));
  }, []);

  return (
    <>
      <Banner
        title='lorem dolorem'
        image={{
          src:
            "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          alt: "banner curos"
        }}></Banner>
      {course && (
        <div>
          <h1>{course.name}</h1>
          <p>
            <strong>Subtitulo: </strong> {course.subtitle}
          </p>
          <p>
            <strong>Especialidad: </strong> {course.data.specialities[0].name}
          </p>
          <p>
            <strong>Info: </strong>
            {course.information}
          </p>
          <div>
            <h3>¿Que aprenderás?</h3>
            <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
          </div>
          <div>
            <h3>Conocimiento previos</h3>
            <ul dangerouslySetInnerHTML={{ __html: course.requirements }} />
          </div>
          <div>
            <h3>Nivel</h3>
            <p>{course.level}</p>
          </div>
          <h2>Temario del curso</h2>
          <Divider></Divider>
          <div>
            {course.data.classes.map(cl => (
              <div key={cl.class.id}>
                <h3>{cl.class.title}</h3>
                <p>{cl.class.description}</p>
                <ul>
                  {cl.subjects.map((s, i) => (
                    <li key={i}>
                      <Link to={`/clase/${s.subject.id}`}>{s.subject.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  course: state.courseReducer.course
});
export default connect(
  mapStateToProps,
  {}
)(Course);
