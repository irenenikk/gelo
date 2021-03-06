import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import NewGame from './NewGame';
import Notifications from './Notifications';
import AllGames from './AllGames';
import MyPage from './MyPage';

export default class Main extends Component {
    render() {
        return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/new' component={NewGame} />
                <Route exact path='/notifications' component={Notifications} />
                <Route exact path='/games' component={AllGames} />
                <Route exact path='/my_page' component={MyPage} />
            </Switch>
        </div>
        )
    }
}
