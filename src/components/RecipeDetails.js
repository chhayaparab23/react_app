import React from 'react'

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={ingredient.weight} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">{ingredient.weight}</li>
            </ul>
        );
    });    
}

export default RecipeDetails
