import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('Testeando la app GifExpertApp', () => {

    test('Hacer snapshot de inicio', () => {
        const wrapper = shallow( <GifExpertApp  />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorías', () => {
        const categories = ['Dragon Ball', 'Tom & Jerry'];
        const wrapper = shallow( <GifExpertApp  defaultCategories = {categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
