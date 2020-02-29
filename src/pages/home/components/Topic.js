import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../StyleComp";
import { connect } from "react-redux";
class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;

    return (
      <TopicWrapper>
        {topicList.map(item => {
          return (
            <TopicItem key={item.get("title")}>
              <img className="topic-pic" src={item.get("imgUrl")} alt="120" />
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapsStateToProps = state => ({
  topicList: state.getIn(["home", "topicList"])
});

export default connect(mapsStateToProps)(Topic);
