import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoForm, TodoList, Footer } from './components/todo';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from './lib/todoHelpers';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn React', isComplete: true },
      { id: 2, name: 'Build an Awesome App', isComplete: false },
      { id: 3, name: 'Ship It!', isComplete: false }
    ],
    currentTodo: '',
    errorMessage: null
  };

  handleInputChange = e => this.setState({ currentTodo: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: generateId(), name: this.state.currentTodo, isComplete: false };
    const updatedTodos = addTodo(this.state.todos, newTodo);

    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: null
    });
  };

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name.'
    });
  }

  handleToggle = (id) => {
    const todos =
      updateTodo(this.state.todos,
        toggleTodo(
          findById(id, this.state.todos)
        )
      );

    this.setState({ todos });
  };

  handleRemove = (id, e) => {
    e.preventDefault();
    const todos = removeTodo(this.state.todos, id);
    this.setState({ todos });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          <TodoList
            todos={this.state.todos}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
