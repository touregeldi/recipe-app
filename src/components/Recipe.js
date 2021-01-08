import React from 'react';

const Recipe = ({img, name ,calories, ingredients}) => {
    return (
        <div className='recipe'>
            <h1>{name}</h1>
            <img src={img} alt=''/>
            <ol>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ol>
            <h3>{calories}</h3>
            
        </div>
    );
}

export default Recipe;