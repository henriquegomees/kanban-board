
const addTask = task => {
    return dispatch => dispatch({
        type: 'ADD_TASK',
        payload: task
    })
}

const markAsTodo = (task, columnIndex, taskindex) => {
    return dispatch => dispatch({
        type: 'MARK_AS_TODO',
        payload: task,
        columnIndex,
        taskindex
    })
}

const markAsDoing = (task, columnIndex, taskindex) => {
    return dispatch => dispatch({
        type: 'MARK_AS_DOING',
        payload: task,
        columnIndex,
        taskindex
    })
}

const markAsDone = (task, columnIndex, taskindex) => {
    return dispatch => dispatch({
        type: 'MARK_AS_DONE',
        payload: task,
        columnIndex,
        taskindex
    })
}

export {
    addTask,
    markAsTodo,
    markAsDoing,
    markAsDone
}
