import {
  GET_ALL_POST,
  GET_POST,
  GET_ALL_SPECIALITIES,
  GET_SPECIALITY,
  GET_ALL_COURSES,
  GET_COURSE,
  GET_ALL_TEACHERS,
  GET_FRAGMENT
} from "./actions";

export const postReducer = (state = {}, action) => {
  const { type, posts, post } = action;

  switch (type) {
    case GET_ALL_POST:
      return { ...state, posts };
    case GET_POST:
      return { ...state, post };
    default:
      break;
  }

  return state;
};

export const specialityReducer = (state = {}, action) => {
  const { type, speciality, specialities } = action;

  switch (type) {
    case GET_ALL_SPECIALITIES:
      return { ...state, specialities };
    case GET_SPECIALITY:
      return { ...state, speciality };
    default:
      break;
  }

  return state;
};

export const courseReducer = (state = {}, action) => {
  const { type, course, courses } = action;

  switch (type) {
    case GET_ALL_COURSES:
      return { ...state, courses };
    case GET_COURSE:
      return { ...state, course };
    default:
      break;
  }

  return state;
};

export const teacherReducer = (state = {}, action) => {
  const { type, teachers } = action;

  if (type === GET_ALL_TEACHERS) {
    return { ...state, teachers };
  }

  return state;
};

export const fragmentReducer = (state = {}, action) => {
  const { type, fragment } = action;

  if (type === GET_FRAGMENT) {
    return { ...state, fragment };
  }

  return state;
};
