const initState = {
    authError: null
}

export default function authReducer(state = initState, action) {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login Error');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return{
                ...state,
                authError: null
            }
        default:
            return state;
    }
}