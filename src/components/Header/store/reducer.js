import * as contants from "./constans";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === contants.SEARCH_FOCUS) {
    return state.set("focused", true);
  }

  if (action.type === contants.SEARCH_BLUR) {
    return state.set("focused", false);
  }

  if (action.type === contants.CHANGE_LIST) {
    return state.set("list", action.data);
  }
  return state;
};
