function previousWeek () {
    // this.previousWeek = this.previousWeek.bind(this)
    let date = new Date()
    let temp = new Date()
    let today = date.getDay()

    let currentDate = date.getDate();
    temp.setDate( currentDate - today );

    let lastWeek = [];

    for (let i = 7; i > 0; i-- ) {

        temp.setDate( temp.getDate() - 1 )
        lastWeek.push( (temp.getMonth() + 1) + '-' + temp.getDate() + '-' + temp.getFullYear() );

    }

    return lastWeek
}
