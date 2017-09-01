import React, {Component} from 'react';
import Navibar from './Navibar.js';
import AllCampuses from './AllCampuses.js';
import axios from 'axios'
import AllStudents from './AllStudents.js';
import CampusesFormContainer from '../containers/CampusesFormContainer.js'
import StudentsFormContainer from '../containers/StudentsFormContainer.js'
import SingleCampus from './SingleCampus.js'
import SingleStudent from './SingleStudent.js'
import {Route, Switch, Redirect} from 'react-router-dom'
import store, { fetchAllCampuses, fetchStudents } from '../store'
import Home from './Home.js';
import UpdateStudentsFormContainer from "../containers/UpdateStudentsFormContainer.js"
import UpdateCampusFormContainer from "../containers/UpdateCampusFormContainer.js"

class Main extends Component{

    componentDidMount(){
        const campusesThunk = fetchAllCampuses();
        const studentsThunk = fetchStudents();
        store.dispatch(campusesThunk);
        store.dispatch(studentsThunk);
    }

    render(){

        return (
        <div>
            <main>
                <Navibar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/campuses/:id" component={SingleCampus} />
                    <Route exact path="/students/:id" component={SingleStudent} />
                    <Route exact path="/campuses" component={AllCampuses} />
                    <Route exact path="/students" component={AllStudents} />
                    <Route exact path="/newstudent" component={StudentsFormContainer} />
                    <Route exact path="/newcampus" component={CampusesFormContainer} />
                    <Route exact path="/updatecampus/:id" component={UpdateCampusFormContainer} />
                    <Route exact path="/updatestudent/:id" component={UpdateStudentsFormContainer} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </main>
        </div>
        )
    }
}

export default Main
