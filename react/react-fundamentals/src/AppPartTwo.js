import React, { Component } from 'react';
import ReactDom from 'react-dom';

class AppPartTwo extends Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
    this.setState({ m: 2 });
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(ReactDom.findDOMNode(this));
    this.inc = setInterval(this.update, 1000);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.inc);
  }
  update = () => {
    const val = this.state.val + 1;
    this.setState({ val });
  }
  render() {
    console.log('render');
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
}

class Wrapper extends Component {
  constructor() {
    super();
    this.state = { increasing: false };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val });
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val} prevState: ${prevState.increasing}`);
  }
  update = () => {
    ReactDom.render(
      <Wrapper val={this.props.val + 1} />,
      document.getElementById('root')
    );
  }
  mount = () => {
    ReactDom.render(<AppPartTwo />, document.getElementById('a'));
  }
  unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    console.log(this.state.increasing);
    return (
      <div>
        <button onClick={this.update}>{this.props.val}</button>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a" />
      </div>
    );
  }
}

Wrapper.defaultProps = { val: 0 };

export default Wrapper;
