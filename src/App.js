import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList, UserDetail } from "./pages";
import { Provider } from "react-redux";
import store from "./store/index";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/:userId" component={UserDetail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
