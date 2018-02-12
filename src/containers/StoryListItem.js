import React from 'react';

const StoryListItem = (props) => {
  const items = props.items;
  return (
      items.map(item => {
        return <li key={item.id}>{item.id}</li>
      })
  );
}

export default StoryListItem;