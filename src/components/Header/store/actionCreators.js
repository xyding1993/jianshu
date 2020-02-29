/*
 * @Author: Yang
 * @Date: 2020-02-28 21:46:48
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-29 11:42:45
 * @Descripttion:
 * @FilePath: /jianshu/src/components/Header/store/actionCreators.js
 */

import * as contants from "./constans";

export const searchFocus = () => ({
  type: contants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: contants.SEARCH_BLUR
});

export const getList = () => {
  return (dispatch) => {
    console.log(123)
  }

}
