const initState = { 
    favorites: []
}

export default function favoriteReducer(state = initState, action) { 
    switch (action.type) { 
        case 'ADD_FAVORITE':
            console.log('added favorite', action.article)
            return{ 
                ...state,
                favorites: [...state.favorites, action.article]
             }
        case 'ADD_FAVORITE_ERROR':
            console.log('Error adding Favorite', action.err);
            return state;
        default:
            return state;
    }
}