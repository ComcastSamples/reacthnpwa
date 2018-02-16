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
    const { isValidPage, page, totalPages } = this.state;

    if(isValidPage || totalPages !== 0) {
      return;
    }
    this.setState({
      isValidPage: validatePage(match.params.page)
    });
    // this.setPagination(match.params.page, url)
  }
  
  componentDidMount() {
    const { match } = this.props
    const { url } = match
    const { isValidPage, page } = this.state;
    if(!isValidPage) {
      return;
    }
    this.setPagination(match.params.page, url)
  }

	componentWillReceiveProps(nextProps) {
    const { totalPages, page } = this.state;
    const prevUrl = this.props.match.url
    const nextUrl = nextProps.match.url
    const nextPage = nextProps.match.params.page
    const [ , prev ] = prevUrl.match(/\/([a-z]*)\//, 'g')
    const [ , next ] = nextUrl.match(/\/([a-z]*)\//, 'g')
    let _totalPages = 0

    console.log(prev)
    console.log(next)
    console.log(totalPages)
    console.log(prevUrl)
    console.log(nextUrl)
    console.log(nextPage)

    if (prev !== next && prevUrl !== nextUrl) {
      console.log("cambiando story")
      this.setState({
        totalPages: 0,
        isValidPage: validatePage(nextPage)
      });
      this.callApi(nextPage, next);
      // this.setState(()=>{
      //   totalPages: 0,
      //   isValidPage: validatePage(nextPage)
      // });
      // this.setPagination(nextPage, nextUrl)
      return;
    }
    // this.setPagination(nextPage, nextUrl)
		if(prevUrl !== nextUrl) {
      console.log("cambiando pagina")
      this.setState({
        isValidPage: validatePage(nextPage, totalPages)
      })
      this.setPagination(nextPage, nextUrl)
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevUrl = this.props.match.url
  //   const nextUrl = prevProps.match.url
  //   const [ , prev ] = prevUrl.match(/\/([a-z]*)\//, 'g')
  //   const [ , next ] = nextUrl.match(/\/([a-z]*)\//, 'g')
  //   console.log(prevUrl)
  //   if(prev !== next) {
  //     this.setState({
  //       totalPages: 0
  //     });
  //     this.setPagination(this.state.page, prevUrl)
  //   }
  // }

  setPagination(page, path) {
    const [ , story ] = path.match(/\/([a-z]*)\//, 'g')
    const { isValidPage, totalPages } = this.state;
    console.log(isValidPage)
    if (isValidPage && totalPages === 0) {
      console.log("call api")
      this.callApi(page, story)
      // this.setState({
      //   story,
      //   page: parseInt(page)
      // })
      return;
    }

    this.setState({
      isValidPage: validatePage(parseInt(page), totalPages),
      story,
      page: parseInt(page),
      totalPages
    })
    // console.log(totalPages)
    // if (totalPages !== 0) {
    //   console.log("ya existe totalPages")
    //   this.setState({
    //     isValidPage: validatePage(parseInt(page), totalPages),
    //     story,
    //     page: parseInt(page),
    //     totalPages
    //   })
    //   return;
    // }
    // console.log("no existe totalPages")
    // initStory(story).then(stories => {
    //   let storiesLength = stories.length
    //   let _totalPages = Math.ceil( parseInt(storiesLength, 10) / 30 )

    //   this.setState({
    //     isValidPage: validatePage(parseInt(page), _totalPages),
    //     story,
    //     page: parseInt(page),
    //     totalPages: _totalPages
    //   })
    // })
  }

  callApi(page, story) {
    initStory(story).then(stories => {
      let storiesLength = stories.length
      let _totalPages = Math.ceil( parseInt(storiesLength, 10) / 30 )

      this.setState({
        isValidPage: validatePage(parseInt(page), _totalPages),
        story,
        page: parseInt(page),
        totalPages: _totalPages
      })
    })
  }

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
    console.log(story)
    console.log(page)
    console.log(totalPages)
    console.log("render")
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