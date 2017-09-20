import React, { Component } from 'react';
import PropTypes from 'prop-types';

// use React.cloneElement to extend functionality of children components 
class Buttons extends Component {
  constructor() {
    super();
    this.state = { selected: 'None' };
  }

  selectedItem(selected) {
    this.setState({ selected });
  }

  render() {
    const fn = child => React.cloneElement(child, { onClick: () => this.selectedItem(child.props.value) });
    const items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>You&apos;ve selected: {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

// understanding react children utilities
const Parent = (props) => {
  console.log(props.children);
  console.log(React.Children.toArray(props.children));

  const items = React.Children
    .map(props.children, child => child);

  return null;
};

// higher order component
const HOC = InnerComponent => class extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentWillMount() {
    console.log('higher order component will mount');
  }

  update = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update}
      />
    );
  }
};

const Button = HOC(({ children, count, update }) => <button onClick={update}>{children} - {count}</button>);

class Label extends Component {
  componentWillMount() {
    console.log('Label will mount');
  }

  render() {
    return (
      <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
    );
  }
}

const LabelHOC = HOC(Label);

const Person = ({ name }) => <li>{name}</li>;

class AppPartThree extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filter: null
    };
  }

  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then(resp => resp.json())
      .then(data => this.setState({ items: data.results }));
  }

  filter = e => this.setState({ filter: e.target.value });

  render() {
    const filterInput = this.state.filter; // only for readability
    let items = this.state.items;

    if (filterInput) {
      items = items.filter(item => item.name.toLowerCase().includes(filterInput.toLowerCase()));
    }

    return (
      <div>
        <Buttons>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
        </Buttons>
        <hr />
        <Parent>
          <div className="childA" />
          <div className="childB" />
        </Parent>
        <Button>button</Button>
        <hr />
        <LabelHOC>labelHOC</LabelHOC>
        <hr />
        <input type="text" onChange={this.filter} />
        <ul>
          {items.map(item =>
            <Person key={item.name} name={item.name} />
          )}
        </ul>
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string
};

export default AppPartThree;
