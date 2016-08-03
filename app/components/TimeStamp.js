import React from 'react'
// import Input from './Input'
// import TaskSelect from './TaskSelect'
// import TaskWriteIn from './TaskWriteIn'
// import Status from './Status'
// import Save from './Save'
// import { timeStamp } from '../styles/timeStamp'


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

            <div>
                <form className="Timestamp">
                    <input type="text" val={this.props.hour} />
                    <input type="text" val={this.props.minutes} />
                </form>
            </div>

        )
    }
}

// TimeStamp.defaultProps = {
//     value: 0,
//     status: 'unsaved'
// }
