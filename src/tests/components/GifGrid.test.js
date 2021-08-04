import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { useFechGifs } from '../../hooks/useFechGifs';
import { GifGrid } from "../../components/GifGrid";

//Simula las llamadas a este archivo
jest.mock('../../hooks/useFechGifs');
describe('Pruebas con el componente <GifGrid/>', () => {
    const category = 'Goku';
    
    test('Hacer un sanpshot del componente',() => {
        
        const mock = jest.fn();
        useFechGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category = {category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostar items cuando se cargan imagenes con useFetchGifs', () => {
        //Hacer mock
        const gifs = [{
            id: 'miid',
            url: 'https://localhost/cualquiercos.jpg',
            title: 'Cualquier cosa'
        }]
        useFechGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category = {category} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
       

    })
})