import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

const { shallow } = require("enzyme")

describe('Grupo de pruebas de los components', () => {
    const title = 'Titulo';
    const url = 'https://example/img.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Prueba componenete <GifGridItem/>', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un parrafo ', () => {
        const parrafo = wrapper.find('p');

        //console.log(parrafo.text().trim());

        expect(parrafo.text().trim()).toBe(title);
    })

    test('Debe tener una imagen con su respectivo src y alt', () => {
        const imagen = wrapper.find('img');

        // console.log(imagen.prop('src'));
        // console.log(imagen.props().alt);

        expect(imagen.prop('src')).toBe(url);
        expect(imagen.props().alt).toBe(title);
    })

    test('Debe tener el estilo animate__fadein', () => {
        const estilo = wrapper.find('div');

        // console.log(estilo.props().className);

        expect(estilo.props().className.includes("animate__fadein")).toBe(true);
    })
    
    
    
    
})
