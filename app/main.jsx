'use strict'

import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import store from './store'
import Root from './components/Root'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path='/' component={Navbar}>
    		<Route path="/temps" component={Root}/>
    		<Route path="/info" component={Profile}/>
    		<IndexRedirect to='/temps'/>
    	</Route>
  	</Router>
  </Provider>,
  document.getElementById('main')
);

