import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载</NavItem>
          <NavSearch className="left"></NavSearch>
          <NavItem className="right">Aa</NavItem>
        </Nav>
        <Addition>
          <Button className="writer">写文章</Button>
          <Button className="sign">注册</Button>
          <Button className="login">登录</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;