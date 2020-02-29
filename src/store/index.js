/*
 * @Author: Yang
 * @Date: 2020-02-28 20:52:53
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-29 11:41:19
 * @Descripttion:
 * @FilePath: /jianshu/src/store/index.js
 */

import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
