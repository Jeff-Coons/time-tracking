import React from 'react'


/**
 * Input For Time Stamp
 * @param { object } - props passed through from day component
 * @param { string } - props.time - if viewing the previous week the set the value to the time passed from teamwork
 * @return - An input field to save our time to teamwork
 */

function Input (props) {


    return (
        <div className="TimeStamp-Input">
            <input
                type='text'
                value={this.props.time}
                week={this.props.week}
                date={this.props.date}
                onBlur={this.handleOnBlur}
                onFocus={this.hndleOnFocus} />
        </div>
    );

}


/**
 * Select for the task that we're saving the time to
 * @param { object } - props passed through from day component
 * @return - A select field to choose your task that
 */
function TaskSelect (props) {

    return (
        <div className="TimeStamp-TaskSelect">
            <select
                week={this.props.week}
                date={this.props.date}
                onBlur={this.handleOnBlur}
                onFocus={this.hndleOnFocus} >

                <option key={this.taskName || ''} value={this.taskName || ''}>{this.taskName || ''}</option>
            </select>
        </div>
    )

}


/**
 * Text area and Input for the task that we're saving the time to
 * @param { object } - props passed through from day component
 * @param { string } - props.taskName - name of the task to fill the text area if we're passing in a previous time entry
 * @param { url } - props.taskUrl - url of the task to fill the text area if we're passing in a previous time entry
 * @return - A select field to choose your task that
 */
function TaskWriteIn (props) {

    // Tie the task name to the task in teamwork

    return (
        <div className="TimeStamp-Writein">
            <div className="TimeStamp-Writein-text">
                <textarea
                    week={this.props.week}
                    date={this.props.date}
                    onBlur={this.handleOnBlur}
                    onFocus={this.hndleOnFocus} >

                    {this.props.taskName}
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


/**
 * Staus Icon indicating if the entry has been saved to teamwork
 * @param { object } - props passed through from day component
 * @return - An icon
 */
function Status (props) {

    return (
        <div className="TimeStamp-Status">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
        </div>
    )

}


/**
 * Save button to save entry to teamwork
 * @param { object } - props passed through from day component
 * @return - A button
 */
function Save (props) {

    return (
        <div className="TimeStamp-Save">
            <button >Save <i className="fa fa-check-circle" aria-hidden="true"></i></button>
        </div>
    )

}

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
                    <Status status={props.status} />
                </div>
                <div className="Timestamp-col col-1-12">
                    <Save />
                </div>
            </div>
        )
    }
}
