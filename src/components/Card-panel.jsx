import React, { Component } from 'react';
import SearchContainer from './hoc/SearchContainer';
import moveisContainer from './moveis-container';

class CardPanel extends Component {
    render() {
        const EnhancedComponent = SearchContainer(
            moveisContainer,
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