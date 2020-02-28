import React from "react";
import Header from "./components/Header";
import Globalstyle from "./style";
import Globalstyle2 from "./static/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Globalstyle />
      <Globalstyle2 />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
