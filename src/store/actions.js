
const addTask = task => {
    return dispatch => dispatch({
        type: 'ADD_TASK',
        payload: task
    })
}

const markAsDoing = task => {
    return dispatch => dispatch({
        type: 'MARK_AS_DOING',
        payload: task
    })
}

export {
    addTask,
    markAsDoing
}
