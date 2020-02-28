/*
 * @Author: Yang
 * @Date: 2020-02-28 20:52:53
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-28 21:22:19
 * @Descripttion:
 * @FilePath: /jianshu/src/store/index.js
 */

import { createStore, compose } from "redux";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers()
);

export default store;
