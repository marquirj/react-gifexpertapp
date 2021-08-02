import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data, loading} =useFechGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
            {
                <div className="card-grid">
                    {
                        data.map( (img) => (
                            <GifGridItem
                                key = {img.id} 
                                {...img}
                            />
                        ))  
                    }
                </div>
            }
        </>
    )
}
