import React, { Component } from 'react'

import ToDo from 'containers/ToDo'
import Doing from 'containers/Doing'
import Done from 'containers/Done'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <h1>Kanban Board</h1>
        </header>

        <div className="container">
          <ToDo></ToDo>
          <Doing></Doing>
          <Done></Done>
        </div>
      </div>
    )
  }
}

export default App
