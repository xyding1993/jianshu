import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
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

class Header extends React.Component {
  getListArea = show => {
    const {
      list,
      mouseIn,
      page,
      handlerMouseEnter,
      handlerMouseLeave,
      focused,
      handlerPageChange,
      totalPage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i += 1) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (mouseIn || focused) {
      return (
        <SearchInfo
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handlerPageChange(page, totalPage)}
            >
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
    return null;
  };

  render() {
    // command+d
    const { focused, handlerInputFocus, handlerInputBlur } = this.props;

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
                onFocus={handlerInputFocus}
                onBlur={handlerInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe64d;
            </i>
            {this.getListArea()}
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

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlerInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handlerInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handlerMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handlerMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlerPageChange(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else {
        dispatch(actionCreators.pageChange(1));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
