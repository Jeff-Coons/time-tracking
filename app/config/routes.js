import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Components
import { Main } from '../components/Main'
// import { Nav } from '../components/Nav'
import { Home } from '../components/Home'

import WeekContainer from '../containers/WeekContainer'

export const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='previous-week' week='previous' component={WeekContainer} />
            <Route path='current-week' week='current' component={WeekContainer} />
        </Route>
    </Router>
);
