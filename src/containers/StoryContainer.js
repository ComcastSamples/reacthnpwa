import React, { Component } from 'react';
import Pagination from './Pagination/Pagination';
import StoryList from './StoryList'
import { validatePage, initStory, listItems } from '../Actions/Actions'
// import { getStoryType, getItem } from '../services/Services';

class StoryContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
      page: 1,
      story: null,
      isValidPage: true,
      stories: [],
      totalStories: 0,
      totalPages: 0,
      perPage: 30
    };
  }

  componentWillMount() {
    const { match } = this.props
    const { isValidPage, totalPages } = this.state;

    if(isValidPage || totalPages !== 0) {
      return;
    }
    this.setState({
      isValidPage: validatePage(match.params.page)
    });
  }
  
  componentDidMount() {
    const { match } = this.props
    const { url } = match
    const { isValidPage } = this.state;
    if(!isValidPage) {
      return;
    }
    this.setPagination(match.params.page, url)
  }

	componentWillReceiveProps(nextProps) {
    const { totalPages } = this.state;
    const prevUrl = this.props.match.url
    const nextUrl = nextProps.match.url
    const nextPage = nextProps.match.params.page
    const [ , prev ] = prevUrl.match(/\/([a-z]*)\//, 'g')
    const [ , next ] = nextUrl.match(/\/([a-z]*)\//, 'g')

    if (prev !== next && prevUrl !== nextUrl) {
      console.log("new story")
      this.setState({
        totalPages: 0,
        isValidPage: validatePage(nextPage)
      });
      this.callApi(nextPage, next);
      return;
    }

		if(prevUrl !== nextUrl) {
      console.log("new page")
      this.setState({
        isValidPage: validatePage(nextPage, totalPages),
        page: parseInt(nextPage, 10),
        totalPages
      })
      this.setPagination(nextPage, nextUrl)
      this.getStoriesItems();
    }
  }


  getStoriesItems() {
    const { page, totalPages, perPage, isValidPage } = this.state
    let { stories } = this.state

    if (!isValidPage) { return }

    stories = listItems(page, perPage, totalPages, stories);
    this.setState({stories})

  }

  callApi(page, story) {
    initStory(story).then(stories => {
      let storiesLength = stories.length
      let _totalPages = Math.ceil( parseInt(storiesLength, 10) / 30 )

      this.setState({
        isValidPage: validatePage(parseInt(page, 10), _totalPages),
        story,
        page: parseInt(page, 10),
        totalPages: _totalPages,
        stories
      })

      this.getStoriesItems();
    })
  }

  setPagination(page, path) {
    const [ , story ] = path.match(/\/([a-z]*)\//, 'g')
    const { isValidPage, totalPages } = this.state;
    if (isValidPage && totalPages === 0) {
      console.log("calling api")
      this.callApi(page, story)
    }

    this.setState({
      isValidPage: validatePage(parseInt(page, 10), totalPages),
      story,
      page: parseInt(page, 10),
      totalPages
    })
  }

  render() {
    const { page, isValidPage, story, stories, totalPages } = this.state
    if (!isValidPage) { return }

    return (
      <div>
        { (isValidPage && 
        <div>
          <Pagination story={story} page={page} pages={totalPages}/>
          <StoryList story={story} page={page} stories={stories}/>
        </div>
        ) || <h1>Invalid page</h1>}
      </div>
    );
  }
}

export default StoryContainer;