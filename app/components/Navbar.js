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
            <li className="active"><Link to="/">Home</Link></li>
            <li style={{'color':'white'}}><Link to='/temps'>Add Temperature</Link></li>
            <li style={{'color':'white'}}><Link to='/info'>My Info</Link></li>
            <li style={{'color':'white'}}><Link to='/allDays'>My Data</Link></li>
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

