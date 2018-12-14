import React from 'react'

export default props => (
    <button onClick={props.onClick} title={props.title} {...props}>
        <i className={`fa fa-${props.icon}`}/>
    </button>
)