import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, FontIcon } from 'material-ui';
import { blue500 } from 'material-ui/styles/colors';
import '../styles/App.scss';
import CardPanel from './Card-panel';

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

            <CardPanel/>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
