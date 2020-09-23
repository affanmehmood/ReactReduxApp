import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import createCourse from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        ></input>
        <input type="submit" value="Save"></input>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ createCourse }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
