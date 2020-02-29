// import * as contants from "./constans";
import { fromJS } from "immutable";
import * as constants from "./constans";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.topicList,
    articleList: action.articleList
  });
};

const loadMoreHomeData = (state, action) => {
  return state.set(
    "articleList",
    state.get("articleList").concat(action.articleList)
  );
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_HOME_DATA_LIST:
      return changeHomeData(state, action);
    case constants.LOAD_MORE_DATA_LIST:
      return loadMoreHomeData(state, action);
    case constants.CHANGE_SCROLL:
      return state.set("showScroll", action.showScroll);
    default:
      return state;
  }
};
