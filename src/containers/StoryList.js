import React from "react";
import StoryListItem from "./StoryListItem";

const StoryList = (props) => {
  const { stories } = props;

  // if (stories.length === 0 || stories === null) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    (stories.length !== 0 && (
      <ul>
        <StoryListItem items={stories} />
      </ul>
    )) || <h1>No data</h1>
  );
};

export default StoryList;
