export const reducer = (state, action) => {
    switch (action.type) {
        case 'addDog':
            return {...state, dogs: [...state.dogs, action.payload]}
        case 'delDog':
            return {}
        case 'addCat':
            return {...state, cats: [...state.cats, action.payload]}
        case 'delCat':
            return {}
        default:
            return state
    }
}