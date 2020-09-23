import * as types from "./actionTypes.js";

const createCourse = (course) => {
  return { type: types.CREATE_COURSE, course };
};
export default createCourse;
