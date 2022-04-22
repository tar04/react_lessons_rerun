export const reducer = (state, action) => {
    switch (action.type) {
        case 'addDog':
            return {...state, dogs: [...state.dogs, action.payload]};
        case 'delDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};
        case 'addCat':
            return {...state, cats: [...state.cats, action.payload]};
        case 'delCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
        default:
            return state;
    }
}