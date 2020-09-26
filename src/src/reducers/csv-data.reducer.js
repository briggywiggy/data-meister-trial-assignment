const csvDataReducerDefaultState = {};

const csvDataReducer = (state = csvDataReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_CSV_DATA':
            return action.csvData;
        default:
            return state;
    }
}

export { csvDataReducer as default }