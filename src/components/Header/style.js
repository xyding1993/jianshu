import styled from "styled-components";
import logoPng from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.div`
  position: absolute;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPng});
  background-size: contain;
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
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  font-size: 14px;
  border: none;
  outline: none;
  border: 1px solid #eee;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
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
  &.reg {
    color: red;
  }
  &.writer {
    color: white;
    background-color: #ec6149;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled("div")({
  position: "absolute",
  left: "20px",
  top: "56px",
  width: "240px",
  padding: "0 20px",
  boxShadow: "0 0 8px rgba(0, 0, 0, .2)",
  background: "#fff"
});

export const SearchInfoTitle = styled("div")({
  marginTop: "20px",
  marginBottom: "15px",
  lineHeight: "20px",
  fontSize: "14px",
  color: "#333"
});

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 2px 6px;
  font-size: 13px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin-left: 5px;
  margin-bottom: 15px;
`;
