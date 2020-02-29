// import * as contants from "./constans";
import { fromJS } from "immutable";
import * as constants from "./constans";

const defaultState = fromJS({
  topicList: [],
  articleList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_HOME_DATA_LIST:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList
      });
    case constants.LOAD_MORE_DATA_LIST:
      return state.set(
        "articleList",
        state.get("articleList").concat(action.articleList)
      );
    default:
      return state;
  }
};
