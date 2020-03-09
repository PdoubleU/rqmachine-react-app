import React from 'react';
import './App.scss';
import * as quotas from './quotas.js';

function App() {
  return (
    <div id="container">
      <div id="quote-box">
        <p id="text">" {quotas.QUOTAS_AND_AUTHORS[6][0]} "</p>
        <p id="author">{quotas.QUOTAS_AND_AUTHORS[6][1]}</p>
        <span className="buttons">
        <button id="new-quote" className="button" color={this.state.color}>New quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" className="button">
          <i className="fa fa-twitter"></i>
        </a>
        </span>
      </div>
    </div>
  );
}

class changeColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ' ',
      backgroundColor: ' ',
    }
  }
}


export default App;
