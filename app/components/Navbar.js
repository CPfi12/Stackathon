import React, { Component } from 'react'
import { Link } from 'react-router'
{/*style={{'backgroundImage': 'url(http://www.thisiscolossal.com/wp-content/uploads/2016/05/kyon05.jpg)',"background-size":"cover"}}*/}

import {connect} from 'react-redux'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
      let cart = this.props.cart
      return (
      <div>
      
      <nav className="navbar navbar-toggleable-xl navbar-light bg-faded">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><Link to="/" style={Object.assign({},{'color': 'midnightblue'},{'font-family': 'Quicksand, sans-serif'},{'font-size':'35px'})}>TempTracker</Link></li>
            <li ><Link to='/temps' style={Object.assign({},{'color': 'midnightblue'},{'font-family': 'Quicksand, sans-serif'},{'font-size':'17px'})}>Add Temperature</Link></li>
            <li ><Link to='/info' style={Object.assign({},{'color': 'midnightblue'},{'font-family': 'Quicksand, sans-serif'},{'font-size':'17px'})}>My Info</Link></li>
            <li ><Link to='/allDays' style={Object.assign({},{'color': 'midnightblue'},{'font-family': 'Quicksand, sans-serif'},{'font-size':'17px'})}>Daily Data</Link></li>
            <li ><Link to='/metadata' style={Object.assign({},{'color': 'midnightblue'},{'font-family': 'Quicksand, sans-serif'},{'font-size':'17px'})}>Metadata</Link></li>
          </ul>
        </div>
      </nav>
      {this.props.children}
      </div>
      )
    }
}


const mapStateToProps = (state) => {
  return {message: 'yes'}
}
export default connect(mapStateToProps,null)(Navbar)

