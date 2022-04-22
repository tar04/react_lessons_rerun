export const reducer = (state, action) => {
    switch (action.type) {
        case 'addDog':
            return {...state, dogs: [...state.dogs, action.payload]}
        case 'delDog':
        case 'addCat':
            return {...state, cats: [...state.cats, action.payload]}
        case 'delCat':
        default:
            return state
    }
}