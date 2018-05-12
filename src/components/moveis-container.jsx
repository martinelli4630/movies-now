import React, { Component } from 'react';
import { get } from 'lodash';
import CardItem from '../views/CardItem';

class moviesContainer extends Component {

    buildCard(results) {
        return (
            <div>
                {results.map((i, k) =>  <div key={k}>{ CardItem( i )}</div> )}
            </div>
        );
    }

    render() {
        const data = this.props.data;

        return (
            <div>
                {(get(data, 'results')) ?
                    this.buildCard(data.results) :
                    null
                }
            </div>
        );
    }
}

export default moviesContainer;