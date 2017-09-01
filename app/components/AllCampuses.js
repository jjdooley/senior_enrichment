import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Image, Button } from 'react-bootstrap'
import store from '../store.jsx'



function AllCampuses(props){
        const baseKey = 0;
        

        return(
            <div className="col-xs-10">
                <h3>Campuses</h3>
                <Button bsStyle="primary">
                    <Link to="/newcampus">
                        Add new campus
                    </Link>
                </Button>
                    <div className="row">
                        {props.campuses.map(x => {
                        return (
                        <div key={x.id}>
                            <div className="col-m-4 col-xs-6" key={x.id}>
                                <Link to={`/campuses/${x.id}`}>
                                    <Image src="/public/favicon.ico" circle responsive/>
                                    <div className="caption">
                                    <h5>
                                        <span>{x.name}</span>
                                    </h5>
                                    </div>
                                </Link>
                                <Button value={x.id} onClick={props.updateCampus}/>
                                <Button value={x.id} onClick={props.deleteCampus}/>
                            </div>
                            </div>
                        )})}
                       
                    </div>
                    </div>)


}

const mapStateToProps = function(state){
   return {campuses: state.campuses};
}


export default connect(mapStateToProps)(AllCampuses);



export {AllCampuses}