'use strict'

import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import store from './store'
import {fetchCampuses} from './reducers/campusReducer';
import {fetchStudents} from './reducers/studentsReducer';
import Root from './components/Root'
import Students from './components/Students';
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import AddCampus from './components/AddCampus';
import AddStudent from './components/AddStudent';

const onCampusEnter = (newProps)=>{
	store.dispatch(fetchCampuses());
}

const onStudentsEnter = (newProps)=>{
	store.dispatch(fetchStudents());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    	<Route path="/" component={Root} onEnter={onStudentsEnter}>
    		<Route path='/campuses' component={Campuses} onEnter={onCampusEnter}/>
    		<Route path='/campus/:id' component={Campus}/>
    		<Route path='/students' component={Students}/>
    		<Route path='/addCampus' component={AddCampus}/>
    		<Route path='/addStudent' component={AddStudent}/>
    		<IndexRedirect to='/campuses' />
    	</Route>

  	</Router>
  </Provider>,
  document.getElementById('main')
);

