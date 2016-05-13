import React, { PropTypes } from 'react'

const propTypes = {
    week: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
}

const defaultProps = {
    week: '',
    isLoading: true
}

// import the teamwork helpers here
export default class WeekContainer extends React.Component {
    constructor(props) {
        super (props)
    }

    render () {

        return <div>Goodbye</div>
        

    }
}

WeekContainer.propTypes = propTypes;
WeekContainer.defaultProps = defaultProps;
