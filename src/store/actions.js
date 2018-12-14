
const markAsDoing = task => {
    console.log(task)
    return dispatch => dispatch({
        type: 'MARK_AS_DOING',
        payload: task
    })
} 

export {
    markAsDoing
}
