import React from 'react';
import SearchContainer from '../components/Search-HOC';
import MoviesContainer from './Movies-container';
import { connect } from 'react-redux';
import { searchSuccess, searchFail } from '../actions';

const CardPanel = (search) => {
    const { query, success, fail } = search;
    const EnhancedComponent = SearchContainer(
        MoviesContainer,
        query,
        success,
        fail
    );

    return (
        <EnhancedComponent />
    );
}

const mapStateToProps = (state) => {
    const { query } = state.search;
    return { query };
}

const mapDispatchToProps = (dispatch) => {
    return {
        success: (obj) => {
            dispatch(searchSuccess(obj));
        },
        fail: (obj) => {
            dispatch(searchFail(obj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPanel);