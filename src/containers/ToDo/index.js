
import React, { Component } from 'react'

import List from 'components/List'
import ListItem from 'components/List/ListItem'

class TodoList extends Component {
    state = {
        name: 'Task name 1'
    }

    render() {
        return (
            <List name="To Do">
                
                <ListItem taskname={this.state.name}>

                    <button title="Mark as Doing">
                        <i className="fa fa-spinner" />
                    </button>

                    <button title="Mark as Done">
                        <i className="fa fa-check" />
                    </button>

                </ListItem>

            </List>
        )
    }
}

export default TodoList
