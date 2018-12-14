
import React, { Component } from 'react'

import ActionButton from 'components/Button'

class ListItem extends Component {

    render(){
        let { taskname, columnIndex } = this.props
        return(
            <div className="list-item">
                <p>{ taskname }</p>
                <div className="buttons-wrapper">
                    
                    { columnIndex !== 0 ? <ActionButton icon="list" title="Mark as ToDo" onClick={() => alert(`oi`)} /> : '' }
                    { columnIndex !== 1 ? <ActionButton icon="spinner" title="Mark as Doing" onClick={() => alert(`oi`)} /> : '' }
                    { columnIndex !== 2 ? <ActionButton icon="check" title="Mark as Done" onClick={() => alert(`oi`)} /> : '' }

                </div>
            </div>
        )
    }
}

export default ListItem
