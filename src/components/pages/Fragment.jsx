import React, { useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";
import store from "../../redux/store";
import { getCourse, getFragment } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Fragment = ({ fragment, course }) => {
  useEffect(() => {
    store.dispatch(getCourse(1));
    store.dispatch(getFragment(123));
  }, []);
  return (
    <div className='class-page-container'>
      {fragment && course && (
        <div className='class-grid' style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div className='columna-item'>
            <h1>Soy una clase</h1>
            <Vimeo video={fragment.video} autoplay width={780} />
            <p>
              <strong>{fragment.name}</strong>
            </p>
            <small>{course.name}</small>
          </div>
          <div className='columna-item'>
            <h2>temario del curso</h2>
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
    </div>
  );
};

const mapStateToProps = state => ({
  fragment: state.fragmentReducer.fragment,
  course: state.courseReducer.course
});

export default connect(
  mapStateToProps,
  {}
)(Fragment);
