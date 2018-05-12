import React from 'react';
import SearchContainer from '../components/hoc/SearchContainer';
import MoviesContainer from './Movies-container';

const CardPanel = (search) => {
    const EnhancedComponent = SearchContainer(
        MoviesContainer,
        search.value
    );

    return (
        <EnhancedComponent />
    );
}

export default CardPanel;