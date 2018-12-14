
import React from 'react'

export default props => (
    <div className="list-item">
        <p>{props.taskname}</p>
        <div className="buttons-wrapper">
            {props.children}
        </div>
    </div>
)
