import * as contants from "./constans";
import axios from "axios";
import { fromJS } from "immutable";

export const changeScrollTopShow = data => ({
  type: contants.CHANGE_SCROLL,
  showScroll: data
});

const changeHomeDataAction = data => ({
  type: contants.GET_HOME_DATA_LIST,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList)
});

export const getHomeDataList = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const { data } = res;
      const action = changeHomeDataAction(data.data);
      dispatch(action);
    });
  };
};

const loadMoreHomeDataAction = data => ({
  type: contants.LOAD_MORE_DATA_LIST,
  articleList: fromJS(data)
});

export const loadMoreHomeDataList = () => {
  return dispatch => {
    axios.get("/api/homeMore.json").then(res => {
      const { data } = res;
      const action = loadMoreHomeDataAction(data.data);
      dispatch(action);
    });
  };
};
