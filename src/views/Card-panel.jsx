import React from 'react';
import SearchContainer from '../components/Search-HOC';
import MoviesContainer from './Movies-container';
import { connect } from 'react-redux';
import { searchSuccess, searchFail } from '../actions';

const CardPanel = (props) => {
    const { query, onSuccess, onFail } = props;
    const EnhancedComponent = SearchContainer(
        MoviesContainer,
        query,
        onSuccess,
        onFail
    );

    return (
        <EnhancedComponent />
    );
}

const mapStateToProps = state => {
    const { query } = state.search;
    return { query };
}

const mapDispatchToProps = dispatch => {
    return {
        onSuccess: (payload) => dispatch(searchSuccess(payload)),
        onFail: (payload) => dispatch(searchFail(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPanel);