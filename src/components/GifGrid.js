// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';
// import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    // getGifs();
    const {data: images, loading} = useFecthGifs(category);
    // console.log(data);
    // console.log(loading);


    return (
        <>
            <h3 className="animate__animated animate__fadein">{category}</h3>
            {
                loading && <p className="animate__animated animate__flash">Loading...</p>
            }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}