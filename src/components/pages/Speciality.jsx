import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getSpeciality } from "../../redux/actionCreators";
import { Divider } from "antd";
const Speciality = ({ speciality }) => {
  useEffect(() => store.dispatch(getSpeciality(1)), []);
  return (
    <div>
      {speciality && (
        <>
          <h1>{speciality.data.name}</h1>
          <h2>{speciality.data.subtitle}</h2>
          <p>{speciality.data.information}</p>
          <Divider></Divider>
          <div>
            <h3>¿Que aprenderás?</h3>
            <ul>
              {speciality.data.abilities.map(a => (
                <li key={a.id}>{a.description}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Conocimiento previos</h3>
            <ul>
              {speciality.data.knowledge.map(k => (
                <li key={k.id}>{k.description}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Nivel</h3>
            <p>{speciality.data.level}</p>
          </div>
          <h2>Temario de la especialidad</h2>
          <Divider />
          <div>
            {speciality.data.courses.map(cl => (
              <div key={cl.id}>
                <img src={cl.picture} alt={cl.name} style={{ width: 200, height: 100 }}></img>
                <h3>{cl.name}</h3>
                <p>{cl.information}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return { speciality: state.specialityReducer.speciality };
};
export default connect(
  mapStateToProps,
  {}
)(Speciality);
