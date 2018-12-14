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
        default : 
            return state
    }
}