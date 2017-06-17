'use strict'

import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import store from './store'
import {loadName} from './reducers/name.jsx'
import {getTempsDay} from './reducers/temp.jsx'
import Root from './components/Root'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AllDays from './components/AllDays'

var startTime = true;
function NavEnt(){
  /*if(startTime){
    startTime = false;
    setInterval(function() { alert("Take your temperature"); }, 30000);
  }*/
 }
function RootEnt(){
  store.dispatch(loadName())
}

function DayEnt(){
  store.dispatch(getTempsDay(1));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path='/' component={Navbar} onEnter={NavEnt}>
    		<Route path="/temps" component={Root} onEnter={RootEnt}/>
    		<Route path="/info" component={Profile} onEnter={RootEnt}/>
        <Route path="/allDays" component={AllDays} onEnter={DayEnt}/>
    		<IndexRedirect to='/temps'/>
    	</Route>
  	</Router>
  </Provider>,
  document.getElementById('main')
);

