import React from 'react'

/**
 * Select for the task that we're saving the time to
 * @param { object } - props passed through from day component
 * @return - A select field to choose your task that
 */
export default class TaskSelect extends React.Component {
    constructor (props) {
        super(props)

        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnFocus () {}

    handleOnBlur () {}

    render () {
        return (
            <div className="TimeStamp-TaskSelect">
                <select
                    week={this.props.week}
                    date={this.props.date}
                    onBlur={this.handleOnBlur}
                    onFocus={this.hndleOnFocus} >

                    <option key={this.props.taskName} value={this.props.taskName}>{this.props.taskName}</option>
                </select>
            </div>
        )
    }
}

TaskSelect.defaultProps = {
    taskName: 'Task Name'
}
