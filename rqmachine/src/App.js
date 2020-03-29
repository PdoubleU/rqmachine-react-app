import React from 'react';
import './App.min.css';
import * as quotas from './quotas.js';
import ReactFCCtest from 'react-fcctest';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        text: '',
        author: '',
        backgroundColor: {backgroundColor: ''},
        color: {color: ''}
      }
      this.handleClick = this.handleClick.bind(this);
    }
  handleClick(){
    var quoteIndex = Math.floor(Math.random() * quotas.QUOTAS_AND_AUTHORS.length);
    this.setState({
      text: quotas.QUOTAS_AND_AUTHORS[quoteIndex][0],
      author: quotas.QUOTAS_AND_AUTHORS[quoteIndex][1],
      backgroundColor: {backgroundColor: quotas.BKG_COLORS[quoteIndex]},
      color: {color: quotas.BKG_COLORS[quoteIndex]}
    })
  }
  componentDidMount(){
    this.handleClick()
  }
  render(){
    return (
      <div className='container' style={this.state.backgroundColor}>
        <div id="quote-box" >
          <p id="text" style={this.state.color}>" {this.state.text} " </p>
          <p id="author" style={this.state.color}> - {this.state.author} </p>
          <span className="buttons">
          <button id="new-quote" className="button" onClick={this.handleClick} style={this.state.backgroundColor}>new quote</button>
          <a href={"https://twitter.com/intent/tweet?text=" + this.state.text + " - " + this.state.author} id="tweet-quote"  rel='noopener noreferrer' target="_blank" className="button" style={this.state.backgroundColor} data-size='large'>
          </a>
          <ReactFCCtest/>
          </span>
        </div>
      </div>
      )
  }
};


export default App;
