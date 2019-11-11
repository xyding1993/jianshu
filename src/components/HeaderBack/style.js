import styled from "styled-components";
import logoPng from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPng}) no-repeat center;
  background-size: cover;
`;

export const Container = styled.div`
  flex: 1;
  height: 58px;
`;

export const Nav = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 960px;
  box-sizing: content-box;
`;

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 240px;
  height: 38px;
  font-size: 14px;
  border: none;
  outline: none;
  border: 1px solid #eee;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  height: 58px;
`;

export const Button = styled.button`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 15px;
  &.sign {
    color: red;
  }
  &.writer {
    color: white;
    background-color: #ec6149;
  }
  &.login {
    border: 0;
    color: #969696;
  }
`;
