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
                { name: 'Kanban Board' }
            ]
        },
        {
            name: 'Done',
            tasks: [
                { name: 'Whatever, something' },
                { name: 'Write tests' }
            ]
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "MARK_AS_TODO" :
            let todo = state.columns.slice()

            todo[action.columnIndex].tasks.splice(action.taskindex, 1)
            todo[0].tasks.splice(0, 0, action.payload)

            return {
                ...state,
                columns: todo
            }
        
        case "MARK_AS_DOING" :
            let doing = state.columns.slice()

            doing[action.columnIndex].tasks.splice(action.taskindex, 1)
            doing[1].tasks.splice(0, 0, action.payload)

            return {
                ...state,
                columns: doing
            }

        case "MARK_AS_DONE" :
            let done = state.columns.slice()

            done[action.columnIndex].tasks.splice(action.taskindex, 1)
            done[2].tasks.splice(0, 0, action.payload)

            return {
                ...state,
                columns: done
            }

        case "ADD_TASK" :
            let addState = state.columns.slice()
            addState[0].tasks.splice(0, 0, action.payload)

            return {
                ...state,
                columns: addState
            }

        default : 
            return state
    }
}