import React from "react";
import StoryListItem from "./StoryListItem";

const StoryList = (props) => {
  const { stories, page } = props;

  return (
    (stories.length !== 0 && (
      <ul className="story-container">
        <StoryListItem stories={stories} page={page} />
      </ul>
    )) || <h1 style={{ margin: "0 15px" }}>Loading stories...</h1>
  );
};

export default StoryList;
