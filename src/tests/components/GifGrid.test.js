import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import { useFecthGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas unitarias del componente <GifGrid />', () => {
    const category = 'Homero';

    test('Validar que el componente se cargue correctamente', () => {

        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar imagenes al hacer el llamado al api', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://sitio.com/imagen.jpg',
            title: 'Homero bailarin'
        },
        {
            id: '123',
            url: 'https://sitio.com/imagen.jpg',
            title: 'Homero bailarin'
        }];

        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    })
    
        
})
