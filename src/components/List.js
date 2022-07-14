import React from 'react';
import RecipeItem from './RecipeItem';

const List = (data) => {
    return (
        <div className='List'>
            <RecipeItem recipes={data}/>
        </div>
    );
};

export default List;