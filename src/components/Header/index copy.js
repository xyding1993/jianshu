import React, { useState } from "react";
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
  SearchInfoList,
  Icon
} from "./style";

const Header = props => {
  const [focused, setFocused] = useState(true);

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

  const inBlur = () => {
    setFocused(false)
  }

  const inFocus = () => {
    setFocused(true)
  }

  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载</NavItem>
        <SearchWrapper>
          <NavSearch
            className={focused ? "focused" : ""}
            onFocus={inFocus}
            onBlur={inBlur}
          ></NavSearch>
          <Icon className={focused ? "focused iconfont" : "iconfont"}>&#xe64d;</Icon>
          {getListArea(props.focused)}
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
};

export default Header;
