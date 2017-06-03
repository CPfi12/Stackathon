import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOAD = 'LOAD_STUDENTS';
const ADD = 'ADD_STUDENT';
const DELETE = 'DELETE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const load  = students => ({ type: LOAD, students });
const add = student => ({type: ADD, student});



/* ------------       REDUCER     ------------------ */

export default function reducer (students = [], action) {
  let newstudents = students.slice(0);
  switch (action.type) {
    case LOAD:
      return action.students;
    case ADD:
      newstudents.push(action.student);
      return newstudents;
    default:
      return students;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
       .then(res => dispatch(load(res.data)));
};

export const addStudent = (studentInfo) => dispatch => {
	axios.post('/api/students',studentInfo)
		.then(res => dispatch(add(res.data)));
}

export const deleteStudent = (studentId) => dispatch => {
  axios.delete(`/api/students/${studentId}`).then((info)=>{
    console.log(info);
  })
}


