import React, { useState } from "react"
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>
            
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>

        </>
    )

}