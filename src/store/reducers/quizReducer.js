const initState = { 
    phq9Quizzes: [],
    gad7Quizzes: []
}

export default function quizReducer(state = initState, action) { 
    switch (action.type) {
        case 'ADD_PHQ9':
            console.log('Added PHQ-9 quiz', action.quiz);
            return {
                ...state,
                phq9Quizzes: [...state.phq9Quizzes, action.quiz]
            }
        case 'ADD_PHQ9_ERROR':
            console.log('Error adding PHQ-9 quiz');
            return state;
        case 'ADD_GAD7':
            console.log('Added GAD-7 quiz', action.quiz);
            return {
                ...state,
                gad7Quizzes:[...state.gad7Quizzes, action.quiz]
            }
        case 'ADD_GAD7_ERROR':
            console.log('Error adding GAD-7 quiz');
            return state;
        default:
            return state;
    }
}