const initState = { 
    quizzes: []
}

export default function quizReducer(state = initState, action) { 
    switch (action.type) {
        case 'ADD_QUIZ':
            console.log('Added quiz', action.quiz);
            return {
                ...state,
                quizzes: [...state.quizzes, action.quiz]
            }
        case 'ADD_QUIZ_ERROR':
            console.log('Error adding quiz');
            return state;
        default:
            return state;
    }
}