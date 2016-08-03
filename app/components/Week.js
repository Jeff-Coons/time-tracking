import React, { PropTypes } from 'react'
import axios from 'axios'
import teamwork from '../helpers/teamwork';
import TimeStamp from './TimeStamp'

const propTypes = {
    weekType: PropTypes.string.isRequired
}


export default class Week extends React.Component {
    constructor (props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            entries: this.props.route.user.then((user) => teamwork.getEntries(user.id, 'previous'))
        });
    }

    render () {

        // console.log(this.state);

        // this.state.entries.then(function(entries) {
        //
        //     entries.map(function(entry) {
        //
        //         console.log(entry);
        //         <TimeStamp hour={entry.hours} minutes={entry.minutes} />
        //     })
        //
        // })

        // return (
        //     <div>
        //         {this.state.entries.then(function(entries, index) {
        //             <TimeStamp hour={2} minutes={30} />
        //             // Object.keys(entries).map(function (entry, index) {
        //             // })
        //         })}
        //     </div>
        // )

        return <div>Cool</div>
    }
}

// Week.propTypes = propTypes;
