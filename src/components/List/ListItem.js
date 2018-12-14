
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActionButton from 'components/Button'

import { markAsDoing } from 'store/actions'

class ListItem extends Component {

    render(){
        let { task, columnIndex, markAsDoing } = this.props
        return(
            <div className="list-item">
                <p>{ task.name }</p>
                <div className="buttons-wrapper">
                    
                    { columnIndex !== 0 ? <ActionButton icon="list" title="Mark as ToDo" onClick={ () => alert(task) } /> : '' }
                    { columnIndex !== 1 ? <ActionButton icon="spinner" title="Mark as Doing" onClick={ () => markAsDoing(task) } /> : '' }
                    { columnIndex !== 2 ? <ActionButton icon="check" title="Mark as Done" onClick={ () => alert(task) } /> : '' }

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({markAsDoing}, dispatch)
export default connect(null, mapDispatchToProps)(ListItem)
