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
            <li><Link to="/" style={{'color': 'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>Home</Link></li>
            <li ><Link to='/temps' style={{'color':'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>Add Temperature</Link></li>
            <li ><Link to='/info' style={{'color': 'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>My Info</Link></li>
            <li ><Link to='/allDays' style={{'color': 'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>Daily Data</Link></li>
            <li ><Link to='/metadata' style={{'color': 'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>Metadata</Link></li>
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

