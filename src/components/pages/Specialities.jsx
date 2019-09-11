import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../organisms/Banner";
import store from "../../redux/store";
import { getAllSpecialities } from "../../redux/actionCreators";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

const Specialities = ({ specialities }) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities());
  }, []);

  return (
    <>
      <Banner
        title='Lineas de especialidad construidas a base de nuestra metodologia ed-core 2.0'
        image={{
          src:
            "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
          alt: "Banner Especialidades"
        }}></Banner>
      <main className='especialidades'>
        {specialities && (
          <Row gutter={16}>
            {specialities.map(speciality => (
              <Col span={6} key={speciality.id}>
                <Link to={`especialidades/${speciality.id}`}>
                  <Card hoverable cover={<img alt={speciality.name} src={speciality.picture} />}>
                    <Meta title={speciality.name} description={speciality.subtitle} />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </main>
    </>
  );
};
const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
});
export default connect(
  mapStateToProps,
  {}
)(Specialities);
