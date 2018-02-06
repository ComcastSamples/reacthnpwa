import React, { Component } from 'react';
import Pagination from './Pagination/Pagination';
import StoryList from './StoryList'

class StoryContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
      page: 1,
      story: null,
      isValidPage: true
		};
  }

  componentDidMount() {
    const { match } = this.props
    const { url } = match

    this.validatePage(match.params.page, url)
  }

	componentWillReceiveProps(nextProps) {
    const prevPage = this.props.match.params.page
    const nextPage = nextProps.match.params.page
    const prevUrl = this.props.match.url
    const nextUrl = nextProps.match.url

		if(prevUrl !== nextUrl) {
			this.validatePage(nextPage, nextUrl)
		}
  }

  validatePage(page, path) {
    const [ second ] = path.match(/\/([a-z]*)\//, 'g')

    this.setState({
      isValidPage: (!isNaN(page)),
      story: second
    });
    this.setState({ page: page })
  }

  render() {
    const { page, isValidPage, story } = this.state
    return (
      <div>
        { (isValidPage && 
        <div>
          <Pagination story={story} page={page}/>
          <StoryList story={story}/>
        </div>
        ) || <h1>Invalid page</h1>}
      </div>
    );
  }
}

export default StoryContainer;