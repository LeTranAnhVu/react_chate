import React from "react";
import {Router, Route, Redirect, Switch} from "react-router-dom";

import "./App.css";
import ChatRoom from "./Pages/ChatRoom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import history from "./Helpers/history";


function App() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/chat_room" component={ChatRoom}/>
                    <Redirect exact from="/" to="/chat_room"/>
                </Switch>

            </Router>

        </div>
    );
}

export default App;
