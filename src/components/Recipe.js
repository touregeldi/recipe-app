import React from 'react';

const Recipe = ({img, name ,calories, ingredients}) => {
    console.log(calories);
    return (
        <div className='recipe'>
            <h1>{name}</h1>
            <img src={img} alt=''/>
            <ol>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ol>
            <h3>{parseInt(calories, 10)} calories</h3>
            
        </div>
    );
    
}

export default Recipe;