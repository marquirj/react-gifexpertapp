import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFechGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
   // eSte codigo Solo quiero que se ejecuta cuando el componente es renderizado por primera vez
    //se añade al corchet  del final la categoria por si cambia que lo vuelva a renderizar
    useEffect(() => {
        getGifs(category)
        .then(img => {    
            setstate({
                data:img,
                loading:false
            
            })
        })
    }, [category]);
    return state;

}
