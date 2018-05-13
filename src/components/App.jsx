import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, FontIcon } from 'material-ui';
import { blue500, blue800 } from 'material-ui/styles/colors';
import '../styles/App.scss';
import CardPanel from '../views/Card-panel';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movies Now</h1>
        </header>

        <div className="Container">
          <MuiThemeProvider>
            <div className='search-box'>
              <TextField
                className='search-field'
                hintText="Type to search for a movie"
              />
              <FontIcon className="material-icons search-icon" color={blue500} hoverColor={blue800}>search</FontIcon>
            </div>

            <CardPanel value='batman' />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
