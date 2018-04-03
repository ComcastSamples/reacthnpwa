import React from "react";
import StoryListItem from "./StoryListItem";

const StoryList = (props) => {
  const { stories, page } = props;

  return (
    (stories.length !== 0 && (
      <ul>
        <StoryListItem stories={stories} page={page}/>
      </ul>
    )) || <h1>Loading...</h1>
  );
};

export default StoryList;
