import React from "react";
import StoryListItem from "./StoryListItem";

const StoryList = (props) => {
  console.log(props)
  const { stories, page } = props;

  // if (stories.length === 0 || stories === null) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    (stories.length !== 0 && (
      <ul>
        <StoryListItem stories={stories} page={page}/>
      </ul>
    )) || <h1>Loading...</h1>
  );
};

export default StoryList;
