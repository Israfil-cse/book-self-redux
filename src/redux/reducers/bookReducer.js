import fakeBooks from '../../fakeData/books.json';


const initialState = {
    discover: fakeBooks,
    readingList: [],
    finishedList: [],
}

function bookReducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_TO_READING_LIST':
            {
                const newState = { ...state, readingList: [...state.readingList, action.payload] };
                return newState;
            }

        case 'REMOVE_FROM_READING_LIST':
            {
                const newState = { ...state, readingList: state.readingList.filter((book) => book.id !== action.payload) }
                return newState
            }

        case 'ADD_TO_FINISHING_LIST':
            {
                const newState = { ...state, finishedList: [...state.finishedList, action.payload] };
                return newState;
            }

        case 'REMOVE_TO_FINISHING_LIST':
            {
                const newState = { ...state, finishedList: state.finishedList.filter((book) => book.id !== action.payload) }
                return newState
            }

        default:
            return state;
    }
}


export default bookReducer;