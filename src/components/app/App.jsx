import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, FontIcon } from 'material-ui';
import { blue500 } from 'material-ui/styles/colors';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movies Now</h1>
        </header>

        <div className="Container">
          <MuiThemeProvider>
            <TextField
              hintText="Type to search for a movie"
            />
            <FontIcon className="material-icons" color={blue500}>search</FontIcon>

          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
