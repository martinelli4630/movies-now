import React, { Component } from 'react';
import { get } from 'lodash';
import CardItem from '../views/CardItem';
import '../styles/Moveis-container.scss'

class MoviesContainer extends Component {

    buildCard(results) {
        return (
            <div className='movies-container'>
                {results.map(i =>  CardItem(i))}
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

export default MoviesContainer;