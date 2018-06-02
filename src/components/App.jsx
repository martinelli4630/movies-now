import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, FontIcon } from 'material-ui';
import { blue500, blue800 } from 'material-ui/styles/colors';
import CardPanel from '../views/Card-panel';
import { connect } from 'react-redux';
import { search } from '../actions';
import '../styles/App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  search() {
    this.props.onSearch(this.state.query);
  }

  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.search()
    }
  }

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
                onKeyPress={(e) => this.handleKeyPress(e)}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
              <FontIcon className="material-icons search-icon"
                color={blue500}
                hoverColor={blue800}
                onClick={() => this.search()}>search</FontIcon>
            </div>

            <CardPanel />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (searchTerm) => dispatch(search(searchTerm))
  }
}

export default connect(null, mapDispatchToProps)(App);;
