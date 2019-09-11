import React, { useEffect } from "react";
import Banner from "../organisms/Banner";
import store from "../../redux/store";
import { getAllTeachers } from "./../../redux/actionCreators";
import { connect } from "react-redux";
import { List, Avatar } from "antd";

const Teachers = ({ teachers, match }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match]);

  return (
    <>
      <Banner
        title='Los mejores profesores de la Industria'
        image={{
          src: "https://gw.alipayobjects.com/zos/rmsportal/lcamFWetlMgLkLmDUgmZ.png",
          alt: "Banner Profesores"
        }}
      />
      {teachers && (
        <main>
          <List
            itemLayout='horizontal'
            dataSource={teachers}
            renderItem={teacher => (
              <List.Item>
                <List.Item.Meta avatar={<Avatar src={teacher.picture} />} title={teacher.name} />
              </List.Item>
            )}
          />
        </main>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
});

export default connect(
  mapStateToProps,
  {}
)(Teachers);
