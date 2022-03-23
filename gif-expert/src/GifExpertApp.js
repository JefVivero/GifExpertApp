import React, { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

    const handleAdd =() => {
        setCategories([...categories, 'Naruto']);  
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />
            <button onClick={handleAdd}>Add</button>

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