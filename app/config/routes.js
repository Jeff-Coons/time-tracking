import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Components
import { Index } from '../components/Index'

export const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Index}>
            <IndexRoute component={Index} />
        </Route>
    </Router>
);
