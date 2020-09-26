const userDataReducerDefaultState = {};

const userDataReducer = (state = userDataReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_USER_DATA':
            return action.userData;
        default:
            return state;
    }
}

export { userDataReducer as default }