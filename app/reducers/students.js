import axios from 'axios';

const UPDATE_STUDENT = 'UPDATE_STUDENT';
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const WRITE_STUDENT = 'WRITE_STUDENT';

export function updateSingleStudent(formData){
    let action = {type: UPDATE_STUDENT, formData}
    return action
}
// formData? not sure

export function getSingleStudent(student){
    let action = {type: GET_STUDENT, student}
    return action
}

export function getAllStudents(students){
    let action = {type: GET_STUDENTS, students}
    return action
}

export function writeNewStudent(student){
    let action = {type: WRITE_STUDENT, student}
    return action
}


export function fetchStudents () {
    
      return function thunk (dispatch) {
        return axios.get('/api/students')
          .then(res => res.data)
          .then(messages => {
            const action = getAllStudents(messages);
            dispatch(action);
          });
      };
    }
    
    export function postNewStudent(input){
        console.log(input)
        return function thunk(dispatch){
            console.log('in thunk') 
            return axios.post('/api/students', {name: input.name, grade: input.grade, email: input.email})
                .then(campus => {
                    console.log('posted!')
                    dispatch(fetchStudents());
                })
                .catch(err => console.error(err))
        }
    }

    export function updateStudent(input){
        console.log(input)
        return function thunk(dispatch){ 
            return axios.put(`/api/students/${input[1]}`, input[0])
                .then(campus => {
                    console.log('after put')
                    dispatch(fetchStudents());
                })
                .catch(err => console.error(err))
        }
    }

    export function deleteStudent(input){
        return function thunk(dispatch){ 
            return axios.delete(`/api/students/${input}`)
                .then(campus => {
                    console.log('after put')
                    dispatch(fetchStudents());
                })
                .catch(err => console.error(err))
        }
    }

export function addNewStudent (){
    return function thunk(dispatch){
        return axios.post('api/students')
    }
}

const students = [];
const student = {};

const initialState = {students, student};

function reducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_STUDENT:
        return action.student

        case GET_STUDENT:
        return action.student
    
        case GET_STUDENTS:
        return action.students
    
        case WRITE_STUDENT:
        return [...state, action.student]
        
        default:
            return state
    }
}

export default reducer;
