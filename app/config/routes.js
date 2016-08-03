import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Components
import { Main } from '../components/Main'
// import { Nav } from '../components/Nav'
import Home from '../components/Home'
import Week from '../components/Week'
import { getUser } from '../helpers/teamwork';

let user = getUser('jeff.coons@union.co')

export const routes = (
    <Router history={hashHistory}>
        <Route path='/'component={Home}>
            <Route path='previous-week' user={user} weekType='previous' component={Week} />
            <Route path='current-week' user={user} weekType='current' component={Week} />
        </Route>
    </Router>
);
