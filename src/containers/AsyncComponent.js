import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        module: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({module: component});
    }

    render() {
      const { module: Component } = this.state;
      return Component ? <Component {...this.props} /> : <h1 style={{margin: "15px"}}>Loading...</h1>;
    }
  }

  return AsyncComponent;
}