import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          <center>
          <img src="https://pbs.twimg.com/profile_images/872103682925527045/Rb-dd0E-_400x400.jpg"></img>
          </center>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
