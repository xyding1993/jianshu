import styled from "styled-components";
import logoPng from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.a`
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

export const Button = styled.button`
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  float: right;
  height: 40px;
  border:1px solid transparent;
  &.write-btn {
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
  &.sign-up {
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
  }
  &.log-in {
    margin: 11px 6px 0 10px;
    font-size: 15px;
  }
`;
