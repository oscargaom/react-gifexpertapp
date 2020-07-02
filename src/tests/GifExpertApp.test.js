import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas unitarias del componente <GifExpertApp />', () => {

    const categories = ['Goku', 'Homero'];

    test('Validar que el componete exista ', () => {
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Validar que el número de categorías corresponde al número de componentes', () => {
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    })
    
})
