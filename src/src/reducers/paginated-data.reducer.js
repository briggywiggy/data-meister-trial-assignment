const paginatedDataReducerDefaultState = {};

const paginatedDataReducer = (state = paginatedDataReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_PAGINATED_DATA':
            return action.paginatedData;
        default:
            return state;
    }
}

export { paginatedDataReducer as default }