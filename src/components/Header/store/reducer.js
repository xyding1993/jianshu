import * as contants from "./constans";

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === contants.SEARCH_FOCUS) {
    return {
      focused: true
    };
  }

  if (action.type === contants.SEARCH_BLUR) {
    return {
      focused: false
    };
  }
  return state;
};
