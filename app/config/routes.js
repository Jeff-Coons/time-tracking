import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Components
import { Home } from '../components/Home'
import { WeekContainer } from '../containers/WeekContainer'

export const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Home}>
            <IndexRoute component={Home} /> // Change to main
            <Route path="current-week" component={WeekContainer} />
            <Route path="current-week" component={WeekContainer} />
        </Route>
    </Router>
);
