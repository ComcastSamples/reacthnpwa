import React from 'react';
import StoryListItem from './StoryListItem'

const StoryList = (props) => {
  const { story } = props;
  let stories = null;
  if (!story || story === null) {
    return <h1>Loading...</h1>
  }
  
  return (
    <ul>
      <StoryListItem items={[]}/>
    </ul>
  );
}

export default StoryList;