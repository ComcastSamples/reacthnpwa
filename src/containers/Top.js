import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      page: 1,
      isValidParam: false
    };
  }

  componentWillMount() {
    const { match } = this.props;
    console.log(match.params.page);
    if (!match.params.page) {
      // <Redirect to={`${match.path}1`}/>
    }
    // if (!match.params.hasOwnProperty('page')) {
    // 	<Redirect to={`${match.path}/1`}/>
    // }
    this.isValidPage(match.params.page);
    // getStoryType('top').then((data) => {
    // 	this.setState({ stories: data.val() });
    // });
  }

  componentDidMount() {
    console.log(this.props.match);
    const { match } = this.props;
    const { isValidParam } = this.state;
    if (!match.params.page) {
      // <Redirect to={`${match.path}1`}/>
    }
    // if (!match.params.hasOwnProperty('page')) {
    // 	<Redirect to={`${match.path}/1`}/>
    // }
    // if (isValidParam) {
    // 	this.getStoryItem(match.params.page)
    // }
    // getStoryType('top').then((data) => {
    // 	this.setState({ stories: data.val() });
    // });
  }

  componentWillReceiveProps(nextProps) {
    const { isValidParam } = this.state;
    if (this.props.match.params.page !== nextProps.match.params.page) {
      this.isValidPage(nextProps.match.params.page);
    }
  }

  getStoryItem(page) {
    const { isValidParam } = this.state;
    if (isValidParam) {
      console.log("get item: " + page);
    }
  }

  isValidPage(page) {
    const { match } = this.props;
    if (!isNaN(page)) {
      this.setState({ isValidParam: true });
    } else {
      this.setState({ isValidParam: false });
    }
    if (!match.params.page) {
      <Redirect to={`${match.path}1`} />;
    }
    this.getStoryItem(page);
  }

  render() {
    console.log(this.props.match);
    const { match } = this.props;
    const { isValidParam } = this.state;
    // console.log(match);
    // const { stories } = this.state;
    // let storyList = [];
    // stories.map((item) => {
    // 	return storyList.push(getItem(item));
    // });
    // Promise.all(storyList).then((data) => {
    // 	console.log(data);
    // });
    return (
      <div>
        {isValidParam && <h2>{match.params.page}</h2>}
        {!isValidParam && <h2>Invalid page...</h2>}
      </div>
    );
  }
}

export default Top;
