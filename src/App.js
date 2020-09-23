import React from "react";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/header";
import CoursesPage from "./components/courses/CoursesPage";
import { Jumbotron } from "react-bootstrap";
import TestComponent from "./TestComp";

function App() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div
          className=" 
          col-8 align-items-center "
        >
          <Header />

          <Jumbotron className=" d-flex align-items-center ">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/courses" component={CoursesPage} />
              <Route component={PageNotFound}></Route>
            </Switch>
          </Jumbotron>
          <TestComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
