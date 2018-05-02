import React from "react";
import { Link } from "react-router-dom";

const StoryListItem = (props) => {
  const { stories, page } = props;

  return stories.map((story) => {
    let currentPage = parseInt(page, 10);
    let storyNumber =
      currentPage !== 1 ? (currentPage * 30) - 30 + story.index + 1 : story.index + 1;

    return (
      <React.Fragment key={story.id}>
        <li className="story" key={story.id}>
          <span className="story_number">{storyNumber}</span>
          <div className="story_title">
            <a href={story.url} aria-label="Story url" className="story-title_link">
              {story.title}
            </a>
            <div className="story_details">
              <span className="story-details_points">
                {`${story.points} points | by `}
                <a className="story-details_user" aria-label="Story user" href={`/user/${story.user}`}>
                  {story.user}
                </a>
                {` | ${story.time_ago} | `}
                <Link
                  className="story-details_comments"
                  to={`/item/${story.id}`}
                >
                  {story.comments_count} comments
                </Link>
              </span>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  });
};

export default StoryListItem;
