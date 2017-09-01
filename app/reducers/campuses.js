import axios from 'axios';

const UPDATE_CAMPUSES = 'UPDATE_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const WRITE_CAMPUS = 'WRITE_CAMPUS';

export function updateCampus(updatedCampus){
    let action = {type: UPDATE_CAMPUSES, updatedCampus}
    return action
}
// formData? not sure

export function getSingleCampus(campus){
    let action = {type: GET_CAMPUS, campus}
    return action
}

export function getAllCampuses(campuses){
    let action = {type: GET_CAMPUSES, campuses}
    return action
}

export function writeNewCampus(campus){
    let action = {type: WRITE_CAMPUS, campus}
    return action
}


export function fetchAllCampuses () {
      return function thunk (dispatch) {
        return axios.get('/api/campuses')
          .then(campuses => {
            const action = getAllCampuses(campuses.data);
            dispatch(action);
          });
      };
    }

export function postNewCampus(input){
    return function thunk(dispatch){ 
        return axios.post('/api/campuses', {name: input.name, location: input.location})
            .then(campus => {
                dispatch(fetchAllCampuses);
            })
            .catch(err => console.error(err))
    }
}




// export function postNewCampus(input){
//     console.log(input)
//     return input => dispatch =>{
//         console.log('not getting here!')
//         axios.post('/api/campuses', {name: input.name, location: input.location})
//             .then(campus => {
//                 const action = writeNewCampus(campus.data);
//                 dispatch(action)
//             })
//             .catch(err => console.error(err))
//     }
    
// }

export function updateNewCampus(input, id){
    return function thunk (dispatch){
        axios.update(`/api/campuses/${id}`, {name: input.name, location: input.location})
            .then(campus => {
                const action = updateCampus(campus.data);
                dispatch(action)
            })
            .catch(err => console.error(err))
    }
}

const campuses = [];
const single = {};

const initialState = {campuses, single}

export default function reducer(state = initialState, action) {
        switch(action.type) {
          case UPDATE_CAMPUSES:
            return action.campus

          case GET_CAMPUS:
            return action.campus
        
          case GET_CAMPUSES:
            return action.campuses
        
          case WRITE_CAMPUS:
            return 
          default:
            return state
        }
      }

