'use strict'

import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import store from './store'
import Root from './components/Root'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AllDays from './components/AllDays'
var startTime = true;
function NavEnt(){
  if(startTime){
    startTime = false;
    setInterval(function() {
      alert('aiyah!') 
      soundAlarm() },10000);
    //setInterval(function(){ alert("Take your temperature"); }, 30000);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path='/' component={Navbar} onEnter={NavEnt}>
    		<Route path="/temps" component={Root}/>
    		<Route path="/info" component={Profile}/>
        <Route path="/allDays" component={AllDays}/>
    		<IndexRedirect to='/temps'/>
    	</Route>
  	</Router>
  </Provider>,
  document.getElementById('main')
);

