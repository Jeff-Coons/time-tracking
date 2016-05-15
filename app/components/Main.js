import React from 'react'

export default class Main extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        console.log(this)
        return (
            <div className="cool">
                {React.cloneElement(this.props.children, {key: props.location.pathname})}
            </div>
        )
    }
}
