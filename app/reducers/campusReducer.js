import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOAD = 'LOAD_CAMPUSES';
const ADD = 'ADD_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const load  = campuses => ({ type: LOAD, campuses });
const add = campus => ({type: ADD, campus});


/* ------------       REDUCER     ------------------ */

export default function reducer (campuses = [], action) {
  let newcamp = campuses.slice(0);
  switch (action.type) {
    case LOAD:
      return action.campuses;
    case ADD:
      newcamp.push(action.campus);
      return newcamp;
    default:
      return campuses;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus')
       .then(res => dispatch(load(res.data)));
};

export const addCampus = () => dispatch => {
	axios.post('/api/campus')
		.then(res => dispatch(add(res.data)));
}


