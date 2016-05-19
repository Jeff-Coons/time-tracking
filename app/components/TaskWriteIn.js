import React from 'react'

/**
 * Text area and Input for the task that we're saving the time to
 * @param { object } - props passed through from day component
 * @param { string } - props.taskName - name of the task to fill the text area if we're passing in a previous time entry
 * @param { url } - props.taskUrl - url of the task to fill the text area if we're passing in a previous time entry
 * @return - A select field to choose your task that
 */

 // Tie the task name to the task in teamwork
export default class TaskWriteIn extends React.Component {
    constructor (props) {
        super(props)

        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnFocus () {}

    handleOnBlur () {}

    render () {
        return (
            <div className="TimeStamp-Writein">
                <div className="TimeStamp-Writein-text">
                    <textarea
                        value={this.props.taskName}
                        week={this.props.week}
                        date={this.props.date}
                        onBlur={this.handleOnBlur}
                        onFocus={this.hndleOnFocus} >    
                    </textarea>
                </div>
                <div className="TimeStamp-Writein-url">
                    <input
                        type='url'
                        value={this.props.taskUrl}
                        week={this.props.week}
                        date={this.props.date}
                        onBlur={this.handleOnBlur}
                        onFocus={this.hndleOnFocus} />
                </div>
                <div className="TimeStamp-Writein-url">
                    <button >Save <i className="fa fa-check-circle" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}

TaskWriteIn.defaultProps = {
    taskName: 'Task Name',
    taskUrl: 'google.com'
}
