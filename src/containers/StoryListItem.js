import React from "react";

const StoryListItem = (props) => {
  const { items } = props;

  return items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <li key={item.id}>
          <span>{item.index + 1}</span>
          {item.title}
        </li>
      </React.Fragment>
    );
  });
};

export default StoryListItem;
