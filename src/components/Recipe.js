import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false);

    const {label,image,url,ingredients} = recipe.recipe;

    const showHide = (e) => {
        setShow(!show);
    }

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank">URL</a>
            <button onClick={showHide}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}></RecipeDetails>}
        </div>
    )
}

export default Recipe
