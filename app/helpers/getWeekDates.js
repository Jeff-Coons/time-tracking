/**
 * Get Week Dates Helper
 * @param { string } - Current or Previous
 * @return { array } - Array of Dates for either the current or previous weeek
 */

export default function getWeekDates(week) {
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
                tempDate.getFullYear() +
                ((tempDate.getMonth() + 1).length === 2 && (tempDate.getMonth() + 1).charAt(0) !== '1' ? (tempDate.getMonth() + 1) : ('0' + (tempDate.getMonth() + 1))) +
                tempDate.getDate()
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
