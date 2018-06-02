import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../access-key.js';

const SearchContainer = (HocComponent, query, onSuccess, onFail) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                data: []
            }
        }

        componentDidMount() {
            if (query) {
                const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

                axios.get(url)
                    .then(json => {
                        this.setState({ data: json.data })
                        onSuccess(json.data)
                    })
                    .catch((error) => {
                        console.log(error);
                        onFail(error);
                    });
            }
        }

        render() {
            return (
                <div>
                    <HocComponent data={this.state.data} {...this.props} />
                </div>
            )
        }
    }
}

export default SearchContainer;