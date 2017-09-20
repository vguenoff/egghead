import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
};

export class Router extends Component {
  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  state = {
    route: getCurrentPath()
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleClickLink
    };
  }

  handleClickLink = (route) => {
    this.setState({ route });
    window.history.pushState(null, '', route);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
