import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */
class Campus extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    let campus = this.props.campus;
    let students = this.props.campus.students;
    console.log('campus+students',campus,students);
    return (
      <div>
        <h1>Campus:{campus.name}</h1>
        <ol>
        {
          students && students.map((student)=>{
            return(
              <div key={student.id}>
                <li>{student.name}</li>
              </div>
              )
          })
        }
        </ol>
      </div>
  );
}
}



/* -----------------    CONTAINER     ------------------ */
const schoolFilter = (campuses,chosenId)=>{
  console.log('stillhave?',campuses,chosenId);
  var chosen = campuses.filter((campus)=>campus.id==chosenId)
  console.log('chosen school',chosen);
  return chosen[0];
}
const mapState = (state,ownProps) => {
  var schoolId = ownProps.routeParams.id;
  console.log('id+campuses',schoolId,state.campuses);
  return {
  campus: schoolFilter(state.campuses,schoolId)
  }
};
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Campus);
