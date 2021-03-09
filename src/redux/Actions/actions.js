export const setSearchfield = (text) => {
    //console.log(text);
    return {
        type: 'CHANGE_SEARCH_FIELD',
        payload: text
    }
}

export const requestRobots = () => (dispatch) => {
    // first request is pending
    // second request is success 
    // third request is failed

    // first
    dispatch({ type: 'REQUEST_ROBOTS_PENDING' });
    // second
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({ type: 'REQUEST_ROBOTS_SUCCESS', payload: data }))
        // third
        .catch(error => dispatch({ type: 'REQUEST_ROBOTS_FAILED', payload: error }))
}