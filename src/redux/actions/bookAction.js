

export function loadBooks(payload) {
    return (dispatch, getState) => {
        fetch('https://israfil-cse.github.io/book-self-api/books.json')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'LOAD_BOOKS',
                    payload : data
                })
            })
    }

}

export function addToReadingList(payload) {
    return {
        type: 'ADD_TO_READING_LIST',
        payload
    }
}


export function removeFromReadingList(payload) {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload
    }
}

export function addTofhinisingList(payload) {
    return {
        type: 'ADD_TO_FINISHING_LIST',
        payload
    }
}

export function removeFromFinishedList(payload) {
    return {
        type: 'REMOVE_TO_FINISHING_LIST',
        payload
    }
}
