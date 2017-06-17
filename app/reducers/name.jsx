import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOAD = 'LOAD_NAME';
const ADD = 'ADD_NAME';

/* ------------   ACTION CREATORS     ------------------ */

const load  = name => ({ type: LOAD, name });
const add = name => ({type: ADD, name});


/* ------------       REDUCER     ------------------ */

/*export default function reducer (state = "", action) {
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
}*/
var initialState = {name: ''}
export default function reducer (state = initialState, action) {
  var newName = Object.assign({},state);
  switch (action.type) {
    case LOAD:
      newName.name = action.name.name;
      console.log(newName)
      return newName;
    case ADD:
      newName.name = action.name.name;
      return newName;
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


