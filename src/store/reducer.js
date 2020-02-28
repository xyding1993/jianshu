/*
 * @Author: Yang
 * @Date: 2020-02-28 21:03:26
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-28 21:14:45
 * @Descripttion:
 * @FilePath: /jianshu/src/store/reducer.js
 */

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === "search_focus") {
    return {
      focused: true
    };
  }

  if (action.type === "search_blur") {
    return {
      focused: false
    };
  }
  return state;
};
