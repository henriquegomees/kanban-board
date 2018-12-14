
import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from 'components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <h1>Kanban Board</h1>
        </header>

        <div className="container">
          {
            this.props.columns.map((column, index) => 
              <List column={column} index={index} key={index} />
            )
          }
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({ columns: state.kanban.columns })
export default connect(mapStateToProps)(App)
