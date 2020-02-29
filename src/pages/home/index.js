/*
 * @Author: Yang
 * @Date: 2020-02-29 16:00:00
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-29 22:53:12
 * @Descripttion:
 * @FilePath: /jianshu/src/pages/home/index.js
 */
import React, { PureComponent } from "react";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import QrDownload from "./components/QrDownload";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./StyleComp";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showScroll } = this.props;
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
        {showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getHomeDataList();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapStateToProps = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatchToProps = dispatch => ({
  getHomeDataList() {
    dispatch(actionCreators.getHomeDataList());
  },
  changeScrollTopShow(data) {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.changeScrollTopShow(true));
    } else {
      dispatch(actionCreators.changeScrollTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
