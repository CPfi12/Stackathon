import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {deleteStudent} from '../reducers/studentsReducer';


/* -----------------    COMPONENT     ------------------ */
class Students extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    let students = this.props.students;
    console.log('student props',this.props);
    return (
      <div>
        <h1>Students!</h1>
        <Link to='/addStudent'>Add a Student</Link>
        <ol> 
        {
          students && students.map((student)=>{
            return (<div key={student.id}>
                    <li>{student.name}    {student.school.name}</li>
                    <button onClick={(evt)=>{this.props.deleteStudent(student.id)}}>X</button>
                    </div>);
          })
        }
        </ol>
      </div>
  );
}
}



/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({
  students: state.students
 });
const mapDispatch = {deleteStudent};

export default connect(mapState, mapDispatch)(Students);