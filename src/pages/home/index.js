/*
 * @Author: Yang
 * @Date: 2020-02-29 16:00:00
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-29 20:46:40
 * @Descripttion:
 * @FilePath: /jianshu/src/pages/home/index.js
 */
import React, { Component } from "react";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import QrDownload from "./components/QrDownload";
import { HomeWrapper, HomeLeft, HomeRight } from "./StyleComp";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <QrDownload />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getHomeDataList();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeDataList() {
      dispatch(actionCreators.getHomeDataList());
    }
  };
};
export default connect(null, mapDispatchToProps)(Home);
