import React from 'react';
import { get } from 'lodash';
import CardItem from '../views/CardItem';
import '../styles/Moveis-container.scss'

const MoviesContainer = props => {
    const data = props.data;
    return get(data, 'results') ?
        <div>{buildCard(data.results)}</div>
        : null;
}

const buildCard = results => {
    return (
        <div className='movies-container'>
            {results.map((i, k) => <CardItem item={i} key={k} />)}
        </div>
    );
}

export default MoviesContainer;