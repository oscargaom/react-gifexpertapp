import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    const categorias = ['One Punch'];
    const [categories, setCategories] = useState(categorias)

    // const handlerAdd = () => {
    //     console.log(categories);

    //     // setCategories( cat => [...cat, 'Nuevo']);
    // };

    return (
        <div>
            <h2>GitExpertApp</h2>
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
