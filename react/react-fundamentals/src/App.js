import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const Title = ({ text }) => <h1>Text: {text}</h1>;
const Heart = () => <span>&hearts;</span>;
const Button = ({ children }) => <button>{children}</button>;
// const Input = ({ update }) => <input ref={node => this.input = node} type="text" onChange={update} />;

const CustomInput = ({ txt, onChange }) => (
  <input
    value={txt}
    onChange={onChange}
  />
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      paragraph: 'Test input to be changed.',
      stateCat: 0,
      currentEvent: '---',
      a: '',
      b: ''
    };
    this.updateCurrentEvent = this.updateCurrentEvent.bind(this);
  }
  update = (e) => {
    this.setState({
      paragraph: e.target.value
    });
  }
  updateCurrentEvent(e) {
    this.setState({
      currentEvent: e.type
    });
  }
  inputUpdate = () => {
    this.setState({
      a: this.a.value,
      b: this.b.value
    });
  }
  render() {
    const txt = this.props.txt;
    const cat = this.props.cat;
    return (
      <div>
        <h1>{txt}</h1> {/* this is optional */}
        <h2>{cat}</h2>
        <p>{this.state.paragraph}</p>
        <CustomInput
          txt={this.state.paragraph}
          onChange={this.update}
        />
        <p>State cat value {this.state.stateCat}</p>
        <Button>
          I <Heart /> React
        </Button>
        <Title text="Hi" />
        <textarea
          onKeyPress={this.updateCurrentEvent}
          onCopy={this.updateCurrentEvent}
          onCut={this.updateCurrentEvent}
          onPaste={this.updateCurrentEvent}
          onFocus={this.updateCurrentEvent}
          onBlur={this.updateCurrentEvent}
          onMouseOver={this.updateCurrentEvent}
          onMouseDown={this.updateCurrentEvent}
          onMouseUp={this.updateCurrentEvent}
          onDoubleClick={this.updateCurrentEvent}
          onTouchStart={this.updateCurrentEvent}
          onTouchMove={this.updateCurrentEvent}
          onTouchEnd={this.updateCurrentEvent}
        />
        <h2>{this.state.currentEvent}</h2>
        <input
          ref={node => this.a = node}
          type="text"
          onChange={this.inputUpdate}
        />
        <p>a: {this.state.a}</p>
        <hr />
        <input
          ref={node => this.b = node}
          type="text"
          onChange={this.inputUpdate}
        />
        <p>b: {this.state.b}</p>
      </div>
    );
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
};

CustomInput.propTypes = {
  txt: PropTypes.string,
  onChange: PropTypes.func
};

Button.propTypes = {
  children: PropTypes.any
};

App.defaultProps = {
  txt: 'this is the default text',
  cat: 55
};

Title.propTypes = {
  text(props, propName) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} is too short.`);
    }
  }
};

export default App;
