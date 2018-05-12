import React, { Component } from 'react';
import SearchContainer from './hoc/SearchContainer';
import MoviesContainer from './Movies-container';

class CardPanel extends Component {
    render() {
        const EnhancedComponent = SearchContainer(
            MoviesContainer,
            'batman'
        );

        return (
            <div>
                <EnhancedComponent />
            </div>
        );
    }
}

export default CardPanel;