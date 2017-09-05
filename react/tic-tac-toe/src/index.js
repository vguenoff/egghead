import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Square = ({ value, onClick }) => (
  <button className="square" onClick={() => onClick()}>
    {value}
  </button>
);

const Board = ({ squares, onClick }) => (
  <div>
    <div className="board-row">
      <Square value={squares[0]} onClick={() => onClick(0)} />
      <Square value={squares[1]} onClick={() => onClick(1)} />
      <Square value={squares[2]} onClick={() => onClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onClick={() => onClick(3)} />
      <Square value={squares[4]} onClick={() => onClick(4)} />
      <Square value={squares[5]} onClick={() => onClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onClick={() => onClick(6)} />
      <Square value={squares[7]} onClick={() => onClick(7)} />
      <Square value={squares[8]} onClick={() => onClick(8)} />
    </div>
  </div>
);

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = [...current.squares];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    const moves = history.map((step, move) => (
      <li key={move}>
        <a
          href="#"
          onClick={() => this.jumpTo(move)}
        >
          {move ? `Move #${move}` : 'Game Start'}
        </a>
      </li>
    ));
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
