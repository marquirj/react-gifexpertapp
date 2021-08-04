import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {
    
    const [categories, setCategories] = useState(defaultCategories);
    //const handleAdd = () => {
    //    setCategories([...categories,'HunterXHunter']);
    //}
    return (
        <>
            <h2>GifExpertapp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => 
                       //<li key={category}>{category}</li>
                        <GifGrid 
                        key={category}
                        category={category} 
                        />
                    )
                }
                
            </ol>
        </>
    )
}