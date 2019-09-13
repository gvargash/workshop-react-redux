import Axios from "axios";
import {
  GET_ALL_POST,
  GET_ALL_SPECIALITIES,
  GET_ALL_COURSES,
  GET_ALL_TEACHERS,
  GET_POST,
  GET_SPECIALITY,
  GET_COURSE,
  GET_FRAGMENT
} from "./actions";

import { message } from "antd";

const API_URL = process.env.REACT_APP_API_URL;

// get All

export const getAllPosts = () => dispacth => {
  Axios.get(`${API_URL}/posts`)
    .then(respnose => {
      return dispacth({ type: GET_ALL_POST, posts: respnose.data });
    })
    .catch(error => message.error(error.message));
};

export const getAllSpecialities = () => dispacth => {
  Axios.get(`${API_URL}/specialities`)
    .then(respnose => {
      return dispacth({
        type: GET_ALL_SPECIALITIES,
        specialities: respnose.data
      });
    })
    .catch(error => message.error(error.message));
};

export const getAllCourses = () => dispacth => {
  Axios.get(`${API_URL}/courses`)
    .then(respnose => {
      return dispacth({
        type: GET_ALL_COURSES,
        courses: respnose.data
      });
    })
    .catch(error => message.error(error.message));
};

export const getAllTeachers = () => dispacth => {
  Axios.get(`${API_URL}/teachers`)
    .then(respnose => {
      return dispacth({
        type: GET_ALL_TEACHERS,
        teachers: respnose.data
      });
    })
    .catch(error => message.error(error.message));
};

// get only one

export const getPost = id => dispacth => {
  Axios.get(`${API_URL}/posts/${id}`)
    .then(respnose => {
      return dispacth({ type: GET_POST, post: respnose.data });
    })
    .catch(error => message.error(error.message));
};

export const getSpeciality = id => dispacth => {
  Axios.get(`${API_URL}/especialidad/${id}`)
    .then(respnose => {
      return dispacth({
        type: GET_SPECIALITY,
        speciality: respnose.data
      });
    })
    .catch(error => message.error(error.message));
};

export const getCourse = id => dispacth => {
  Axios.get(`${API_URL}/curso/${id}`)
    .then(respnose => {
      return dispacth({
        type: GET_COURSE,
        course: respnose.data
      });
    })
    .catch(error => message.error(error.message));
};

export const getFragment = id => dispacth => {
  Axios.get(`${API_URL}/clases/${id}`)
    .then(respnose => {
      return dispacth({
        type: GET_FRAGMENT,
        fragment: respnose.data
      });
    })
    .catch(error => message.error(error.message));
};
