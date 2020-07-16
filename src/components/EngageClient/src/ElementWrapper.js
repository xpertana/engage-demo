import React, { Component } from "react";

export default class ElementWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      counter: 0
    };
  }

  hide() {
    this.setState({ hidden: true });
  }

  submit(data) {
    // with submit object: {action, ctx }
    // action - can do something
    // ctx - can set ctx
    this.props.submitHandler(data);
  }

  componentDidMount() {
    // ... that takes care of the subscription...
    //DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    //DataSource.removeChangeListener(this.handleChange);
  }

  render() {
    return <>{this.props.children}</>;
  }
}
