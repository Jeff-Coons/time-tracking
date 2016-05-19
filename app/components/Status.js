import React from 'react'

/**
 * Staus Icon indicating if the entry has been saved to teamwork
 * @param { object } - props passed through from day component
 * @return - An icon
 */
export default class Status extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="TimeStamp-Status">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
            </div>
        )
    }
}
