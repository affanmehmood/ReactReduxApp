import React from "react";
import { connect } from "react-redux";

const TestComponent = (props) => {
  console.log();
  return (
    <div>
      <h4>This is a test component</h4>
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps)(TestComponent);
