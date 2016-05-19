import React from 'react'
import Input from './Input'
import TaskSelect from './TaskSelect'
import TaskWriteIn from './TaskWriteIn'
import Status from './Status'
import Save from './Save'


export default class TimeStamp extends React.Component {
    constructor (props) {
        super(props)

        /** bind this so we dont return an instance of the react component */
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnFocus () {}

    handleOnBlur () {}



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
                    <Status status={this.props.status} />
                </div>
                <div className="Timestamp-col col-1-12">
                    <Save />
                </div>
            </div>
        )
    }
}

TimeStamp.defaultProps = {
    value: 0,
    status: 'unsaved'
}
