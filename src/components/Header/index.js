import React, { Component } from "react";
import { HeaderWrapper, Logo, Button } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Button className="write-btn">写文章</Button>
        <Button className="sign-up">注册</Button>
        <Button className="log-in">登录</Button>
      </HeaderWrapper>
    );
  }
}

export default Header;
