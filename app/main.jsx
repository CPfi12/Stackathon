'use strict'

import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import store from './store'
import {loadName} from './reducers/name.jsx'
import {getTempsDay,getTemps} from './reducers/temp.jsx'
import Root from './components/Root'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AllDays from './components/AllDays'

var startTime = true;
function NavEnt(){
  if(startTime){
    startTime = false;
    setInterval(function() { 
      //var snd = new Audio('/Users/clairejpfister/Music/iTunes/iTunes\ Media/Music/Unknown\ Artist/Unknown\ Album/foghorn-daniel_simon.mp3');
      var play= true;
      var snd = document.getElementById('audio');
      console.log(snd);
      snd.play();
      snd.onended = function(){
        alert('Take your temperature!')
      }
      /*snd.addEventListener("ended", function(){
            //snd.currentTime = 0;
            console.log('In HERE?')
            if(play){
              alert('ended');
              play = false;
            }
            snd.off('ended');
      });*/
      console.log('banana!');

     
    }, 60000);
    
 }
}
function RootEnt(){
  store.dispatch(loadName())
}

function DayEnt(){
  store.dispatch(getTemps());
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

