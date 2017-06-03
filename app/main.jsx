'use strict'

import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import store from './store'
import {fetchCampuses} from './reducers/campusReducer';
import Root from './components/Root'
import Students from './components/Students';
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import AddCampus from './components/AddCampus';

const onCampusEnter = ()=>{
	store.dispatch(fetchCampuses());
}

const onStudentsEnter = ()=>{

}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    	<Route path="/" component={Root}>
    		<Route path='/campuses' component={Campuses} onEnter={onCampusEnter}/>
    		<Route path='/campus/:id' component={Campus}/>
    		<Route path='/students' component={Students}/>
    		<Route path='/addCampus' component={AddCampus}/>
    		{/*<Route path='/addcampus' component={AddCampus}/>
    		<Route path='/addstudent' component={AddStudent}/>*/}
    		<IndexRedirect to='/campuses' />
    	</Route>

  	</Router>
  </Provider>,
  document.getElementById('main')
);

