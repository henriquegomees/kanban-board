
import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from 'components/List'
import ListItem from 'components/List/ListItem'

class TodoTasks extends Component {
    render() {
        return (
            <List name="To Do">
                {
                    this.props.tasks.map(task => 
                        !task.todo
                        ? ''
                        : <ListItem taskname={task.name}>
                            <button title="Mark as Doing">
                                <i className="fa fa-spinner" />
                            </button>

                            <button title="Mark as Done">
                                <i className="fa fa-check" />
                            </button>
                        </ListItem>
                    )
                }
            </List>
        )
    }
}


const mapStateToProps = state => ({ tasks: state.kanban.tasks })
export default connect(mapStateToProps)(TodoTasks)
