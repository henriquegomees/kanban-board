
import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from 'components/List'
import ListItem from 'components/List/ListItem'

class DoingTasks extends Component {
    render() {
        return (
            <List name="Done">
                {
                    this.props.tasks.map(task => 
                        !task.doing
                        ? ''
                        : <ListItem taskname={task.name}>
                            <button title="Mark as ToDo">
                                <i className="fa fa-list" />
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
export default connect(mapStateToProps)(DoingTasks)
