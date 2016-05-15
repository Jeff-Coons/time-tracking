import React from 'react'

/** Input Component For Start and Stop Time */
export default class Input extends React.Component {
    constructor (props) {
        super(props)


    }

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
