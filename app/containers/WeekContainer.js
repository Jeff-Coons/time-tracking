import React from 'react'

// import the teamwork helpers here

export class WeekContainer extends React.Component {
    constructor(props) {
        super (props)

        this.previousWeek = this.previousWeek.bind(this)
    }

    previousWeek () {

        let date = new Date()
        let temp = new Date()
        let today = date.getDay();

        let currentDate = date.getDate();
        temp.setDate( currentDate - today );


        for (let i = 7; i > 0; i-- ) {

            temp.setDate( temp.getDate() - 1 )
            dates.push(temp.getDate());

        }

        // Returns array of the date (only # between 1 -31 at the moment)
        // Should return array of MM-DD-YYY
    }

    render () {
        return (<div></div>)
    }
}

WeekContainer.defaultProps = {
    isLoading: true
}
