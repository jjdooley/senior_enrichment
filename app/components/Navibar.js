import React, { Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Navbar, NavItem, MenuItem, NavDropdown, Nav, Brand, Toggle, Header, Collapse} from 'react-bootstrap'
import store from '../store.jsx'

function Navibar(props){
    let eventKey = 1
    console.log(props)
        return (
    <div>  
        { console.log(props) }     
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <Link to="/home">JS Learnin</Link>
                </Navbar.Brand>
            </Navbar.Header>
                <Nav>
                <NavItem>
                    <Link to="/students/">Students</Link>
                </NavItem>
                <NavItem>
                    <Link to="/campuses">Campuses</Link>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
        )
    
}

const mapStateToProps = function(state){
    return {campuses: state.campuses};
 }
 
 
 export default connect(mapStateToProps)(Navibar);
 
 
 
 export {Navibar}