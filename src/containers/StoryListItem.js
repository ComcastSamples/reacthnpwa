import React from "react";

const StoryListItem = (props) => {
  const { stories, page } = props;

  return stories.map((story) => {
    let currentPage = parseInt(page, 10);
    let numberStory = currentPage !== 1 ? (page * 10) + 10 : story.index + 1;
    return (
      <React.Fragment key={story.id}>
        <li className="story" key={story.id}>
          <span className="story_number">{numberStory}</span>
          <div className="story_title">
            <a href={story.url} className="story-title_link">{story.title}</a>
            <div className="story_details">
              <span className="story-details_points">{story.points} points | by {story.user} | {story.time_ago} | {story.comments_count}</span>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  });
};

export default StoryListItem;
