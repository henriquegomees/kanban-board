
import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from 'components/List'
import ListItem from 'components/List/ListItem'

class DoneTasks extends Component {
    render() {
        return (
            <List name="Done">
                {
                    this.props.tasks.map(task => 
                        !task.done
                        ? ''
                        : <ListItem taskname={task.name}>
                            <button title="Mark as ToDo">
                                <i className="fa fa-list" />
                            </button>
                            
                            <button title="Mark as Doing">
                                <i className="fa fa-spinner" />
                            </button>
                        </ListItem>
                    )
                }
            </List>
        )
    }
}

const mapStateToProps = state => ({ tasks: state.kanban.tasks })
export default connect(mapStateToProps)(DoneTasks)
