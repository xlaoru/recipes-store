import React from 'react';
import {useDispatch} from 'react-redux'
import {AddNewRecipe} from '../actions'

const AddRecipe = () => {
    let dispatch = useDispatch()
    const dataGetter = (event) => {
        event.preventDefault()
        let data = event.target.elements
        if (data.title.value !== '' && data.body.value !== '') {
            dispatch(AddNewRecipe(data.title.value, data.body.value))
        } else {
            alert('Fill all inputs')
        }
        data.title.value = ''
        data.body.value = ''
    }
    return (
        <span className='AddRecipe'>
            <form onSubmit={dataGetter}>
                <span>
                    <input type="text" name="title" placeholder='type your recipe`s title' />
                    <input type="text" name="body" placeholder='type your recipe`s body' />
                </span>
                <button type='submit'>Add new recipe</button>
            </form>
        </span>
    );
};

export default AddRecipe;