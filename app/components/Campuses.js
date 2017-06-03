import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */
class Campuses extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    let campuses = this.props.campuses;
    let stylePref = {
      width: '100px',
      height: '100px'
    }
    return (
      <div>
        <h1>Campuses!</h1>
        <Link to='/addCampus'>Add a Campus</Link>
        {
          campuses && campuses.map((campus)=>{
            return(
              <div key={campus.id}>
                <Link to={`/campus/${campus.id}`}>
                <h3>{campus.name}</h3>
                <img style={stylePref} src={this.props.imageUrl}/>
                </Link>
              </div>
              )
          })
        }
      </div>
  );
}
}



/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({
  campuses: state.campuses
 });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Campuses);
