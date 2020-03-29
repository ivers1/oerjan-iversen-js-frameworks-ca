import React from "react";

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import ContactForm from "./components/form/ContactForm";
import GameDetail from "./components/games/GameDetail";

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="container">
        
        <Layout />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} Home />
                    <Route path="/game/:id" component={GameDetail} Game Details />
                    <Route path="/contact" component={ContactForm} Contact />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
