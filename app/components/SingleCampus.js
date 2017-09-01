// import axios from 'axios';
import React from 'react'
import store from '../store.jsx'
import {StudentList} from './StudentsList'
import { Image } from 'react-bootstrap'
import { connect } from 'react-redux'


function SingleCampus(props){
    console.log('props:', props.campuses)
    const campSearch = function(x){return x.id === Number(props.match.params.id)}
    const studSearch = function(x){return x.campusId === Number(props.match.params.id)}
    const selectedCampus = props.campuses.find(campSearch)
    const studentsInCampus = props.students.filter(studSearch)
    console.log('campus:', selectedCampus, 'studInCampus:', studentsInCampus)
    return(
    <div>
        <div className='centered'>
          <h3>{ selectedCampus.name }</h3>
          <Image src="favicon.ico" circle />
        </div>
        
        <div className='postable'>
            <StudentList students={studentsInCampus} campusId={selectedCampus.id}/>
        </div>
    </div>
    )
}

const mapStateToProps = function(state){
    return {campuses: state.campuses, students: state.students};
 }
 
 // console.log(this.props)
 
export default connect(mapStateToProps)(SingleCampus);
 
 
 


export {SingleCampus}
