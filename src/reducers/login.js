const initialState = {
    token: "",
    role: "user"
}

const SignIn = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case 'LOGIN':

        case 'LOGOUT':

        default:
            return state;
    }
}

export const SignIn = (data) =>{
    return {
        type: 'LOGIN',
        payload: data
    }
}

export const LogOut = (data) =>{
    return {
        type: 'LOGOUT',
        payload: data
    }
}

export default SignIn;