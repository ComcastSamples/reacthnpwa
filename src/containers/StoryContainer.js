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
    const [ second ] = url.match(/\/([a-z]*)\//, 'g')

    this.validatePage(match.params.page, second)
  }

	componentWillReceiveProps(nextProps) {
    const prevPage = this.props.match.params.page
    const nextPage = nextProps.match.params.page
    const { url } = nextProps.match
    const [ second ] = url.match(/\/([a-z]*)\//, 'g')

		if(prevPage !== nextPage) {
			this.validatePage(nextPage, second)
		}
  }

  validatePage(page, path) {
    this.setState({
      isValidPage: (!isNaN(page)),
      story: path
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