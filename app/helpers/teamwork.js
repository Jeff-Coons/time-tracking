import axios from 'axios'
import getWeekDates from '../helpers/getWeekDates'

/**
 * @see - http://developer.teamwork.com/timetracking
 */

const API_KEY = 'shark303nike';
const HEADER = {"Authorization": "BASIC " + window.btoa(API_KEY + ":xxx")};

const previousWeek = getWeekDates('previous').slice(1, -1);
const currentWeek = getWeekDates('current').slice(1, -1);

let dates;
let email = 'jeff.coons@union.co';

const getUser = function (email) {
    return axios.request({
        method: 'GET',
        url: 'https://teamwork.union.co/people.json',
        headers: HEADER
    }).then((response) => {

        let user = response.data.people.filter(
            (data) => data['email-address'] === email
        )[0];

        return user;
    })
    .catch((error) => console.log(error));
}

const getTimeEntries = function (id, week) {
    // (week === 'previous') ? dates = previousWeek : dates = currentWeek;
    dates = ['20160722', '20160721', '20160720', '20160719', '20160718'];

    if ( id !== undefined ) {
        return axios.request({
            method: 'GET',
            url: 'https://teamwork.union.co/time_entries.json?userId=' + id + '&fromdate=' + dates[4] + '&' + 'todate=' + dates[0],
            headers: HEADER
        }).then((response) => {

            return response.data['time-entries']

        })
        .catch((error) => console.log(error))
    }
}

const teamwork = {
    getUser: getUser,
    getEntries: getTimeEntries
}

module.exports = teamwork;
