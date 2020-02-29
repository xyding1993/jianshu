import * as contants from "./constans";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.SEARCH_FOCUS:
      return state.set("focused", true);
    case contants.SEARCH_BLUR:
      return state.set("focused", false);
    case contants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case contants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case contants.CHANGE_LIST:
      // 改变多个数据
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case contants.PAGE_CHANGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
