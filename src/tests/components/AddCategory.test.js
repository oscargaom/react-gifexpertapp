import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas unitarias del componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    
    test('Validar que el componente sea valido', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Validar el evento handleChange', () => {
        const input = wrapper.find("input");
        const value = "Hola mundo!!!";
        
        input.simulate("change", { target: { value } });
        
        const p = wrapper.find("p");
        
        expect(p.text()).toBe(value);
    })

    test('Validar el evento handleSubmit vacío', () => {
        const form = wrapper.find("form");

        form.simulate("submit", {
            preventDefault: () => {}
        });

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Validar el evento handleSubmit con datos', () => {
        const input = wrapper.find("input");
        const value = "Submit test";
        
        input.simulate("change", { target: { value } });
        
        const form = wrapper.find("form");

        form.simulate("submit", {
            preventDefault: () => {}
        });
        
        expect(setCategories).toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find("input");
        const value = "Prueba número 5";
        
        input.simulate("change", {
            target: {
                value
            }
        });

        const form = wrapper.find("form");

        form.simulate("submit", {
            preventDefault: () => {}
        });

        
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toBeCalledWith( expect.any(Function) );
        expect(wrapper.find('input').prop('value')).toBe("");
    })
    
    
})
