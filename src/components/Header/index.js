import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

const getListArea = show => {
  return (
    <SearchInfo>
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch>换一换</SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
      </SearchInfoList>
    </SearchInfo>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.handlerInputFocus = this.handlerInputFocus.bind(this);
    this.handlerInputBlur = this.handlerInputBlur.bind(this);
  }

  handlerInputFocus = () => {
    this.setState({
      focused: true
    });
  };

  handlerInputBlur = () => {
    this.setState({
      focused: false
    });
  };

  render() {
    const { focused } = this.state;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载</NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={this.handlerInputFocus}
                onBlur={this.handlerInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe64d;
            </i>
            {getListArea(focused)}
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
        </Nav>
        <Addition>
          <Button className="writer">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;
