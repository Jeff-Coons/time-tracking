import React from 'react'
import Day from './Day'

const defaultProps = {
    currentWeek: getWeekDates ('current'),
    previousWeek: getWeekDates ('previous')
}

function getWeekDates (week) {
    let date = new Date() // get the current date => returns string
    let tempDate = new Date() // a temp variable to save the dates to
    let today = date.getDay() // returns the number of day according to the week ie firday = 5
    let untilSunday = 8 - date.getDay() // get the remaining days until sunday plus 1
    let currentDate = date.getDate(); // current number of day in the month
    let datesArray = [] // array of the dates

    if ( week === 'previous' ) {

        tempDate.setDate( currentDate - today );

        for (let i = 7; i > 0; i-- ) {

            tempDate.setDate( tempDate.getDate() - 1 )
            datesArray.push(
                (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear()
            )

        }

    } else {

        tempDate.setDate( currentDate + untilSunday );

        for (let i = 7; i > 0; i-- ) {

            tempDate.setDate( tempDate.getDate() - 1 )
            let key = tempDate.getDay();
            datesArray.push(
                (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear()
            )

        }
    }

    return datesArray;
}


export default class Week extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        let dates;

        if ( this.props.week === 'previous') {

            dates = this.props.previousWeek.map((date) => {
                // return <li key={date}>{date}</li>
                return <Day key={date} week={this.props.week} date={date} />
            });

        } else {

            dates = this.props.currentWeek.map((dates) => {
                // return <li key={date}>{date}</li>
                return <Day key={date} week={this.props.week} date={date} />
            });
        }

        return (
            <ul>
                {dates}
            </ul>
        )
    }
}

Week.defaultProps = defaultProps;
