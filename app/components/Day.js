import React from 'react';
import TimeStamp from './TimeStamp'


// Handle the rendering of each time recorded throughout the day, and previous days
export default class Day extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <TimeStamp />
        )
    }
}
