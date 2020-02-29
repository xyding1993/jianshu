import React from "react";
import Header from "./components/Header";
import Globalstyle from "./style";
import Globalstyle2 from "./static/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Globalstyle />
      <Globalstyle2 />
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/detail" exact>
              <Detail />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
