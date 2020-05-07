import React, { Component } from "react";

export class ErrorBoundary extends Component {
  state = {
    error: ""
  };

  componentDidCatch(error) {
    this.setState({ error });
    console.error(error);
  }
  render() {
    return this.state.error ? (
      <h1>Sorry, something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;