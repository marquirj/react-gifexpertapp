import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem', () => {

    const title ='Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title= {title} url={url} />);

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('alt')).toBe(title);
        expect(img.prop('src')).toBe(url);
    });
    test('debe tener animate_faidIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        
        expect(className.includes('animate__bounce')).toBe(true);
    });

})
