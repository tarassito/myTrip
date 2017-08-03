import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "./home/home.js";
import Comments from "./comment/Comments.js";
import Login from "./registration/login.js";
import Registration from "./registration/registration.js";
import Trip from "./trip/trip.js";
import NotFound from './notFound.js';

export default class MainRoute extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/registration'
                        render={(props) => <Registration
                            loginHandler={this.props.loginHandler}
                            {...props}
                        /> }
                    />
                    <Route exact path='/login'
                        render={(props) => <Login
                            loginHandler={this.props.loginHandler}
                            {...props}
                        />}
                    />
                    <Route exact path='/comment' component={Comment} />
                    <Route exact path='/trip/:id' component={Trip} />
                    <Route exact path='/trip' component={Trip} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        );
    }
}
