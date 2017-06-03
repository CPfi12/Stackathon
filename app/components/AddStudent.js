import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addStudent} from '../reducers/studentsReducer';


/* -----------------    COMPONENT     ------------------ */
class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.onStudentSubmit = this.onStudentSubmit.bind(this);
  }

  onStudentSubmit(evt){
    evt.preventDefault();
    console.log('Submitted!');
    const studentInfo = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      schoolName: evt.target.schoolName.value,
    }
    this.props.addStudent(studentInfo);
    console.log("student info",studentInfo);
  }

  render(){
    return (
      <div>
          <h1>Enter Campus Information:</h1>
          <h4>{this.props.message}</h4>
          <form onSubmit={this.onStudentSubmit}>
            <div>
              <label>Name</label>
              <input
                name="name"
                type="name"
              />
            </div>
            <div>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                />
            </div>
            <div>
                <label>School Name</label>
                <input
                  name="schoolName"
                  type="schoolName"
                />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        
    );
}
}




/* -----------------    CONTAINER     ------------------ */
const mapState = (state,ownProps) => {
  return {
  message: 'Will add student'
  }
};
const mapDispatch = {addStudent};

export default connect(mapState, mapDispatch)(AddStudent);