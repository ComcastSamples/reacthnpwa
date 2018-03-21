import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AsyncComponent from "./containers/AsyncComponent";
import Navigation from "./containers/Navigation/Navigation";

const StoryContainer = AsyncComponent(() =>
  import("./containers/StoryContainer")
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div className="container">
            <Switch>
              <Route path="/news/:page?" component={StoryContainer} />
              <Route path="/newest/:page?" component={StoryContainer} />
              <Route path="/show/:page?" component={StoryContainer} />
              <Route path="/ask/:page?" component={StoryContainer} />
              <Route path="/jobs/:page?" component={StoryContainer} />
              <Route
                path="*"
                render={() => {
                  return <Redirect to="/news/1" />;
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
