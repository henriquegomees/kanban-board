const INITIAL_STATE = {
    tasks: [
        {
            name: "Lern redux form",
            todo: true,
            doing: false,
            done: false
        },
        {
            name: "Learn the basics of react-native",
            todo: false,
            doing: true,
            done: false
        },
        {
            name: "Study Vue.Js",
            todo: false,
            doing: false,
            done: true
        },
        {
            name: "Thats it fot today, folks",
            todo: false,
            doing: false,
            done: true
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default : 
            return state
    }
}