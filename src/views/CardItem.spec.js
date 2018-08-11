import {
    shallow
} from 'enzyme';
import CardItem from './CardItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({
    adapter: new Adapter()
});

const props = {
    id: 1,
    title: 'Batman',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, fringilla sed ex sed, tincidunt mattis purus. Phasellus quis magna enim. Sed rhoncus iaculis eleifend.',
    release_date: '2002-01-15',
    vote_average: 7.5,
    poster_path: '/batman.png'
}

describe('CardItem test', () => {
    it('should create card item correctly using props params', () => {
        const wrapper = shallow( < CardItem item = {props}/> );

        expect(wrapper).toBeTruthy(); 
        expect(wrapper.find('.title').text()).toEqual(props.title)
        expect(wrapper.find('.rate').text()).toContain(props.vote_average)
        expect(wrapper.find('.card-details').text()).toContain(props.id)
        expect(wrapper.find('.card-details').text()).toContain(props.overview)
        expect(wrapper.find('.card-details').text()).toContain(props.release_date)
        expect(wrapper.find('img').prop('src')).toContain(props.poster_path)
    });
});