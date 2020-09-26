import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// routes
import HomePage from '../routes/HomePage/home-page.route';
import NotFoundPage from '../routes/NotFoundPage/not-found-page.route';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </Router>
)

export { AppRouter as default };