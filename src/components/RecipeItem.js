import React from 'react';

const RecipeItem = (props) => {
    let recipeProps = props.recipes.recipe
    return (
        <div className='RecipeItem'>
            {recipeProps.map((recipes, index) => 
                <span className='item' key={index + 1}>{index + 1}. <span className='title'>{recipes.title.toUpperCase()}</span> <br />
                    <span className='body'>{recipes.body}</span>
                </span>
            )}
        </div>
    );
};

export default RecipeItem;