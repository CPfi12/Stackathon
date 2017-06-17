import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOAD = 'LOAD_TEMPS';
const ADD = 'ADD_TEMPS';

/* ------------   ACTION CREATORS     ------------------ */

const load  = temps => ({ type: LOAD, temps });
const add = temp => ({type: ADD, temp});


/* ------------       REDUCER     ------------------ */

export default function reducer (state = [], action) {
  let newTemps = state.slice(0);
  //return Object.assign({},{});
  switch (action.type) {
    case LOAD:
      return action.temps;
    case ADD:
      return [action.temp];
    default:
      return newTemps;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const getTemps = () => dispatch => {
  axios.get('/api/allTemps')
       .then(res => dispatch(load(res.data)));
};

export const getTempsDay = () => dispatch => {
  axios.get('/api/temps/1')
    .then(res=>dispatch(load(res.data)))
}
export const addTemp = (tempInfo) => dispatch => {
  console.log('in addTemp?')
  axios.post('/api/',tempInfo)
    .then(res => dispatch(add(res.data)));
}


