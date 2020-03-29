import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./components/home/Home";
import ContactForm from "./components/form/ContactForm";
import GameDetail from "./components/games/GameDetail";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="container">
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">        
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink to="/" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact 
                        </NavLink>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} Home />
                    <Route path="/games/:id" component={GameDetail} Game Details />
                    <Route path="/contact" component={ContactForm} Contact />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
