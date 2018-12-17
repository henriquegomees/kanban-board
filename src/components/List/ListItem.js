
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActionButton from 'components/Button'

import { markAsTodo, markAsDoing, markAsDone  } from 'store/actions'

class ListItem extends Component {

    render(){
        let { task, taskindex, columnIndex, markAsDoing, markAsDone, markAsTodo } = this.props
        return(
            <div className="list-item">
                <p>{ task.name }</p>
                <div className="buttons-wrapper">
                    
                    { columnIndex !== 0 ? <ActionButton icon="list" title="Mark as ToDo" onClick={ () => markAsTodo(task, columnIndex, taskindex) } /> : '' }
                    { columnIndex !== 1 ? <ActionButton icon="spinner" title="Mark as Doing" onClick={ () => markAsDoing(task, columnIndex, taskindex) } /> : '' }
                    { columnIndex !== 2 ? <ActionButton icon="check" title="Mark as Done" onClick={ () => markAsDone(task, columnIndex, taskindex) } /> : '' }

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({markAsTodo, markAsDoing, markAsDone}, dispatch)
const mapStateToProps    = state    => ({ columns: state.kanban.columns })
export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
