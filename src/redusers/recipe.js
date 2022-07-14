const recipe = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return [
                ...state,
                {
                    title: action.title,
                    body: action.body
                }
            ]
        default:
            return state
    }
}

export default recipe