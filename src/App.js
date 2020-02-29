import React from "react";
import Header from "./components/Header";
import Globalstyle from "./style";
import Globalstyle2 from "./static/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Globalstyle />
      <Globalstyle2 />
      <Provider store={store}>
        <div>
          <Header />
          <Router>
            <Switch>
              <Route path="/detail" exact>
                <Detail />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Detail() {
  return <h2>Detail</h2>;
}

export default App;
