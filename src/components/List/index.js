
import React from 'react'

import ListItem from './ListItem'

import "./list.css"

const List = ({column, index}) => (
    <div className="list">
        <header>
            <h2>{column.name}</h2>
        </header>

        {
            column.tasks.map((task, taskIndex) => 
                <ListItem taskname={task.name} key={taskIndex} columnIndex={index}/>
            )
        }

    </div>
)

export default List
