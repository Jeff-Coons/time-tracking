import React, { PropTypes } from 'react'

import Week from '../components/Week'

// const propTypes = {
//     week: PropTypes.string.isRequired,
//     // isLoading: PropTypes.bool.isRequired
// }

const defaultProps = {
    isLoading: true
}

// import the teamwork helpers here
export default class WeekContainer extends React.Component {
    constructor(props) {
        super (props)
    }

    render () {
        console.log(this.props)

        if ( this.props.route.week === 'previous' ) {

            return (
                <div>
                    <Week week={this.props.route.week} />
                </div>
            )

        } else {

            return <div>Hello</div>
        }

    }
}

// WeekContainer.propTypes = propTypes;
WeekContainer.defaultProps = defaultProps;
