import React from 'react'
import { Link } from 'react-router'

export class Nav extends React.Component {
    render () {
        return (
            <div className="Nav">
                <div className="Link Link-nav Nav-item">
                    <Link to='/previous-week'>Previous Week</Link>
                </div>
                <div className="Link Link-nav Nav-item">
                    <Link to='/current-week'>Current Week</Link>
                </div>
            </div>
        );
    }
}
