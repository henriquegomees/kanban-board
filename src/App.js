
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '@material-ui/core/Button'
import AddTaskForm from 'components/AddTask'

import List from 'components/List'

import { addTask } from 'store/actions'

class App extends Component {
  state = {
    openModal: false,
    taskInput: ''
  }

  _handleAddTask(){
    let { taskInput } = this.state
    if(taskInput === ''){return alert('Task name is required')}

    let task = {name: taskInput}
    this.props.addTask(task)
    this.setState({ openModal: false })
  }

  render() {
    return (
      <div className="App">
        <header id="header">
          <h1>Kanban Board</h1>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => this.setState({openModal: true})}
          >
            Add Task
          </Button>
        </header>

        <div className="container">
          {
            this.props.columns.map((column, index) => 
              <List column={column} index={index} key={index} />
            )
          }
        </div>

          <AddTaskForm 
            open={this.state.openModal} 
            onChange={e => this.setState({ taskInput: e.target.value })}
            handleAddTask={this._handleAddTask.bind(this)}
            onClose={() => this.setState({openModal: false})} />

      </div>
    )
  }
}

const mapStateToProps = state => ({ columns: state.kanban.columns })
const mapDispatchToProps = dispatch => bindActionCreators({ addTask }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
