const initState = { 
    favourites: [
        { id: '1', title: 'Correlation found between depressive mood and diet', content: 'Blah blah blahblah blahblah blahblah blahblah blah' },
        { id: '2', title: 'No correlation found between depressive mood and diet', content: 'Blah blah blahblah blahblah blahblah blahblah blah' },
        { id: '3', title: '10 reasons not to kermit suislide', content: 'And 5 more reasons how the muppets predicted the second coming' },
        { id: '4', title: 'Local Karen embezzles millions from suicide hotline', content: 'Blah blah blahblah. Karen was found dead in her apartment at 5:03 pm Saturday morning after neighbours complained of a foul stench that has been lingering for a few months. blahblah blahblah blahblah blah' },
        { id: '5', title: 'I\'m Vegan', content: 'I know you didnt ask but i just thought you should know. It\'s great. I feel terrible and sick all the time but the animals that are already being slaughtered for consumption by the general populus has not decreased even a little.' }
    ]
 }

export default function favouriteReducer(state = initState, action) { 
    switch (action.type) { 
        case 'ADD_FAVOURITE':
            console.log('added favourite', action.article)
            return{ 
                ...state,
                favourites: [...state.favourites, action.article]
             }
        case 'ADD_FAVOURITE_ERROR':
            console.log('Error adding Favourite', action.err);
            return state;
        default:
            return state;
     }
 }