import React from 'react'
import Input from './Input'
import TaskSelect from './TaskSelect'
import TaskWriteIn from './TaskWriteIn'
import Status from './Status'
import Save from './Save'

export default class TimeStamp extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="Timestamp">
                <div className="Timestamp-col col-1-12">
                    <Input position='start' />
                </div>
                <div className="Timestamp-col col-1-12">
                    <Input position='stop' />
                </div>
                <div className="Timestamp-col col-4-12">
                    <TaskSelect />
                </div>
                <div className="Timestamp-col col-1-12">
                    <TaskWriteIn />
                </div>
                <div className="Timestamp-col col-1-12">
                    <Status status={props.status} />
                </div>
                <div className="Timestamp-col col-1-12">
                    <Save />
                </div>
            </div>
        )
    }
}
