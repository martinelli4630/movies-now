import React from 'react';
import { get } from 'lodash';
import CardItem from '../views/CardItem';
import '../styles/Moveis-container.scss'

const MoviesContainer = (obj) => {
    const data = obj.data;
    return (
        <div>
            {(get(data, 'results')) ?
                buildCard(data.results) :
                null
            }
        </div>
    );
}

const buildCard = (results) => {
    return (
        <div className='movies-container'>
            {results.map((i, k)=>  <CardItem item={i} key={k}/>)}
        </div>
    );
}

export default MoviesContainer;