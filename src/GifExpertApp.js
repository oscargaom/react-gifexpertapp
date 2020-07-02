import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

export const GifExpertApp = ({defaultCategories = []}) => {

    //const categorias = ['One Punch'];
    const [categories, setCategories] = useState(defaultCategories)
    // const [categories2, setCategories2] = useState([1])
    // const [categories3, setCategories3] = useState([2])

    // const handlerAdd = () => {
    //     console.log(categories);

    //     // setCategories( cat => [...cat, 'Nuevo']);
    // };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={ handlerAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( cat => (
                        //  <li key={cat}>{cat}</li>
                        <GifGrid key={cat} category={cat}/>
                    ))
                }
            </ol>

        </div>
    )
}

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.array
}