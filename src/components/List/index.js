
import React from 'react'
import "./list.css"

const List = props => (
    <div className="list">
        <header>
            <h2>{props.name}</h2>
        </header>

        {props.children}
    </div>
)

export default List
