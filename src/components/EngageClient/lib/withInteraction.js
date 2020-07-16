import React, { Component } from "react";

// This function takes a component...
function withInteraction(WrappedComponennt, args) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.state = {
        hidden: false,
        counter: 0,
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      //DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      //DataSource.removeChangeListener(this.handleChange);
    }

    handleHide() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    handleSubmit(data) {
      // call parent
      this.props.submitHandler();
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <WrappedComponent
          hidden={this.state.hidden}
          counter={this.state.counter}
          classText={this.state.classText}
          hide={this.handleHide.bind(this)}
          submit={this.handleSubmit.bind(this)}
          {...this.props}
        />
      );
    }
  };
}

export default withInteraction;
