import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../StyleComp";
import { connect } from "react-redux";
class Topic extends Component {
  render() {
    debugger;
    const { topicList } = this.props;

    return (
      <TopicWrapper>
        {topicList.map(item => {
          return (
            <TopicItem>
              <img className="topic-pic" src={item.get("imgUrl")} alt="" />
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapsStateToProps = state => ({
  topicList: state.get("home").get("topicList")
});

export default connect(mapsStateToProps)(Topic);
