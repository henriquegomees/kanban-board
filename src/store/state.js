const INITIAL_STATE = {
    columns: [
        {
            name: 'ToDo',
            tasks: [
                { name: 'Market Website' },
                { name: 'React challange' }
            ]
        },
        {
            name: 'Doing',
            tasks: [
                { name: 'KanbanBoard' }
            ]
        },
        {
            name: 'Done',
            tasks: [
                { name: 'Whatever, something' }
            ]
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "MARK_AS_DOING" :
            let newState = {...state}
            newState.columns[1].tasks.push(action.payload)
            return newState

        case "ADD_TASK" :
            let addState = {...state}
            addState.columns[0].tasks.push(action.payload)
            return addState

        default : 
            return state
    }
}