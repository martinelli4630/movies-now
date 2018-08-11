import {
    mount,
    shallow
} from 'enzyme';
import MoviesContainer from './Movies-container';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({
    adapter: new Adapter()
});

const props = {
    results: [{}, {}]
};

jest.mock('./CardItem', () => ()=> <div className='card-box'>mockUserCom</div>)

describe('MoviesContainer test', () => {
    it('should create MoviesContainer correctly using props params', () => {
        const wrapper = mount( < MoviesContainer data = {props}/> );
        expect(wrapper).toBeTruthy(); 
        expect(wrapper.find('.card-box').length).toEqual(2)
    });

    it('should return null when props is null', () => {
        const wrapper = shallow( < MoviesContainer data = {null}/> );
        expect(wrapper.type()).toEqual(null)
    });

    it('should return null when props.results is null', () => {
        const wrapper = shallow( < MoviesContainer data = {{}}/> );
        expect(wrapper.type()).toEqual(null)
    });
});