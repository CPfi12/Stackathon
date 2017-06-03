import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOAD = 'LOAD_CAMPUSES';

/* ------------   ACTION CREATORS     ------------------ */

const load  = campuses => ({ type: LOAD, campuses });



/* ------------       REDUCER     ------------------ */

export default function reducer (campuses = [], action) {
  switch (action.type) {

    case LOAD:
      return action.campuses;

    default:
      return campuses;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus')
       .then(res => dispatch(load(res.data)));
};


