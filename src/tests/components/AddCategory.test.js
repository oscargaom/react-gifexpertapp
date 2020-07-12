import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas unitarias del componente <AddCategory/>', () => {

    // En el momento de la inicialización setCategories es undefined.
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        // Clears the mock.calls and mock.instances properties of all mocks
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
        /*  Como el valor de inputValue es vacío la función setCategories no es 
            llamada, y como inicialmente el valor de setCategories es igual a jest.fn()
            y este es igual a undefined, se valida que no haya cambiado su valor y 
            se determine que la función no fue llamada.
        */
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Validar el evento handleSubmit con datos', () => {
        const input = wrapper.find("input");
        const value = "Submit test";
        
        // Se va a cambiar el valor del inputValue
        input.simulate("change", { target: { value } });
        
        const form = wrapper.find("form");

        form.simulate("submit", {
            preventDefault: () => {}
        });
        
        /*  Se espera que setCategories se haya llamda porque el valor del inputValue
            no es vacío.
        */
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

        // Se espera que solamente se haya realizado el llamado una sola vez        
        expect(setCategories).toHaveBeenCalledTimes(1);

        /*  Use .toHaveBeenCalledWith to ensure that a mock function was called with specific arguments.
            Por lo que se espera que setCategories haya realizado un llamado a una función (setCategories(cat => [inputValue, ...cat]);)
        */
        expect(setCategories).toBeCalledWith( expect.any(Function) );
        expect(wrapper.find('input').prop('value')).toBe("");
    })
    
    
})
