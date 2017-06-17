import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOAD = 'LOAD_NAME';
const ADD = 'ADD_NAME';

/* ------------   ACTION CREATORS     ------------------ */

const load  = name => ({ type: LOAD, name });
const add = name => ({type: ADD, name});


/* ------------       REDUCER     ------------------ */

export default function reducer (name = "", action) {
  var newName = ""
  console.log('In name reducer',name, action,action.name);
  switch (action.type) {
    case LOAD:
      return action.name.name;
    case ADD:
      return action.name.name;
    default:
      return newName;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const loadName = () => dispatch => {
  axios.get('/api/name')
       .then(res => {
        console.log(res.data);
        dispatch(load(res.data))});
};

export const addName = (nameInfo) => dispatch => {
  axios.put('/api/name',nameInfo)
    .then(res => dispatch(add(res.data)));
}


