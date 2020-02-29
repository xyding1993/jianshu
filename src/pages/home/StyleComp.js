/*
 * @Author: Yang
 * @Date: 2020-02-29 16:16:28
 * @LastEditors: Yang
 * @LastEditTime: 2020-02-29 19:23:01
 * @Descripttion:
 * @FilePath: /jianshu/src/pages/home/StyleComp.js
 */
import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 28px;
  float: left;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 6px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding: 28px 0 0;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 14px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .article-pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommandWrapper = styled.div`
  width: 280px;
  padding: 0 0 10px 0;
  margin-top: -10px;
`;

export const RecommandItem = styled.div`
  width: 280px;
  min-height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-top: 6px;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  height: 400px;
  border: 1px solid #dcdcdc;
`;
