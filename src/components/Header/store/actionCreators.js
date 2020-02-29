/*
 * @Author: Yang
 * @Date: 2020-02-28 21:46:48
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-29 14:24:26
 * @Descripttion:
 * @FilePath: /jianshu/src/components/Header/store/actionCreators.js
 */

import * as contants from "./constans";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({
  type: contants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: contants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: contants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: contants.MOUSE_LEAVE
});

export const pageChange = page => ({
  type: contants.PAGE_CHANGE,
  page
});

const changeList = data => ({
  type: contants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const { data } = res;
        const action = changeList(data.data);
        dispatch(action);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
