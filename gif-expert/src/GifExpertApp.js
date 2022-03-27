import React, { useState } from "react"
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Itachi']);
    
    return (
        <>
            <h1 className="animate__animated animate__backInRight">GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>
            
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                                    key={category} 
                                    category={category}                                    
                                />;
                    })
                }
            </ol>

        </>
    )

}