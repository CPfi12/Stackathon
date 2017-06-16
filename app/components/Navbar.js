import React, { Component } from 'react'
import { Link } from 'react-router'


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
            <li><Link to='/temps'>Add Temperature</Link></li>
            <li><Link to='/info'>My Info</Link></li>
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

