import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Strava-Withings Tool</h2>
        </div>
        <p className="App-intro">
          <div class="sign-in">
   
            <h3 class="strava-username">Strava Username</h3>
            <input type="text" id="strava-username-input" text="Strava Username"></input>
            <h3 class="strava-password">Strava Password</h3>
            <input type="password" id="strava-password-input" text="Strava Password"></input>
   
            <button>go</button>

        </div>
        </p>
      </div>
    );
  }
}

export default App;
