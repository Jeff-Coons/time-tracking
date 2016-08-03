import React from 'react'


export default class Main extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="cool">
                {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
            </div>
        )
    }
}
