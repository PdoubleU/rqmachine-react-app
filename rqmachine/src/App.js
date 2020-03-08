import React from 'react';
import './App.scss';
import * as quotas from './quotas.js';

function App() {
  return (
    <div id="containter">
      <div id="quote-box">
        <p id="text">" {quotas.QUOTAS_AND_AUTHORS[6][0]} "</p>
        <p id="author">{quotas.QUOTAS_AND_AUTHORS[6][1]}</p>
        <span class="buttons">
        <button id="new-quote" class="button">New quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" class="button">
          <i class="fa fa-twitter"></i>
        </a>
        </span>
      </div>
    </div>
  );
}

export default App;
