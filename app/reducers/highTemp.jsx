import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOAD = 'LOAD_HIGH';
const ADD = 'ADD_HIGH';

/* ------------   ACTION CREATORS     ------------------ */

const load  = num => ({ type: LOAD, highCont:num });
const add = num => ({type: ADD, highCont:num});


/* ------------       REDUCER     ------------------ */

export default function reducer (highCont = "", action) {
  let newCont = ''; 
  switch (action.type) {
    case LOAD:
      return action.highCont;
    case ADD:
      return action.highCont;
    default:
      return newCont;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const getHighCont = () => dispatch => {
  axios.get('/api/high')
       .then(res => dispatch(load(res.data.number)));
};

export const addHighCont = (contInfo) => dispatch => {
  axios.put('/api/high',contInfo)
    .then(res => dispatch(add(res.data.number)));
}


