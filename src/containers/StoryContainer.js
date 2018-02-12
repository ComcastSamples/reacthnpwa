import React, { Component } from 'react';
import Pagination from './Pagination/Pagination';
import StoryList from './StoryList'
import { validatePage, initStory } from '../Actions/Actions'
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
      totalPages: 0
    };
  }

  componentWillMount() {
    const { match } = this.props
    const { url } = match

    this.setState({
      isValidPage: validatePage(match.params.page)
    })
    this.setPagination(match.params.page, url)
  }
  
  componentDidMount() {
    const { isValidPage, story, page, totalPages } = this.state;
    const { match } = this.props
    const { url } = match

    if(!isValidPage) {
      return;
    }
    this.setPagination(page, url)

  }

	componentWillReceiveProps(nextProps) {
    const { totalPages } = this.state;
    const prevUrl = this.props.match.url
    const nextUrl = nextProps.match.url
    const nextPage = nextProps.match.params.page

		if(prevUrl !== nextUrl) {
      this.setState({
        isValidPage: validatePage(nextPage, totalPages)
      })
      this.setPagination(nextPage, nextUrl)
		}
  }

  setPagination(page, path) {
    const [ , story ] = path.match(/\/([a-z]*)\//, 'g')

    this.setState({
      story,
      page
    });

    this.getPages()
  }

  getPages() {
    const { isValidPage, story, stories, totalPages, page } = this.state;

    initStory(story).then(stories => {
      console.log(stories)
      let storiesLength = stories.length
      let totalPages = Math.ceil( parseInt(storiesLength, 10) / 30 )
      this.setState({
        isValidPage: validatePage(page, totalPages)
      })

      this.setState({
        stories,
        totalPages
      })
    })
  }
  // getPages() {
  //   const { stories, page } = this.state
  //   if (!stories) {
  //     return;
  //   }
  //   console.log(stories)

  //   console.log(parseInt(stories.length, 10) / 30)
    // this.setState({ totalPages: parseInt(totalStories, 10) / 30 });
    // this.setState({ totalStories: stories.length })
    // this.setState({ totalPages:  Math.ceil(_totalPages) })
  // }

  // getStories() {
  //   const { isValidPage, story, page } = this.state;
  //   let _totalPages;

  //   if(!isValidPage) {
  //     return;
  //   }
  //   console.log(isValidPage)
  //   console.log(story)
  //   console.log(page)
  //   getStoryType(story).then((data) => {
  //     this.setState({
  //       stories: data.val()
  //     });
  //   })

    // _totalPages = data.val().length
    // this.setState({
    //   stories: 
    // })
    // this.getPages()
    // this.getStoriesItems()
  // }

  // getStoriesItems() {
  //   let { stories } = this.state;
  //   let storyList = [];

  //   console.log(stories)
	// 	stories.map((item) => {
	// 		return storyList.push(getItem(item));
	// 	});
	// 	Promise.all(storyList).then((data) => {
	// 		console.log(data);
	// 	});
  // }

  render() {
    const { page, isValidPage, story, stories, totalPages } = this.state

    // if (!totalStories.length === 0) {
    //   return <h1>Invalid</h1>
    // }

    return (
      <div>
        { (isValidPage && 
        <div>
          <Pagination story={story} page={page} pages={totalPages}/>
          <StoryList story={story} page={page}/>
        </div>
        ) || <h1>Invalid page</h1>}
      </div>
    );
  }
}

export default StoryContainer;