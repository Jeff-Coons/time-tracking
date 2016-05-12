import React from 'react'

/** Input Component For Start and Stop Time */
export class TimeStamp extends React.Component {
    constructor (props) {
        super(props) {
            position: props.position, // 'start' or 'end'
            time: props.time // if loading previous times, pass in the time and load the value in the input
        }

        /** bind this so we dont return an instance of the react component */
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnFocus () {}

    handleOnBlur () {}

    render () {
        return (
            <input
                value={ this.props.time }
                type='text'
                onFocus={ this.handleOnFocus }
                onBlur={ this.handleOnBlur } />
        );
    }
}

TimeStamp.propTypes = {
    position: propTypes.string.isRequired,
    time: propTypes.number
}

TimeStamp.defaultProps = {
    time: 0
}
