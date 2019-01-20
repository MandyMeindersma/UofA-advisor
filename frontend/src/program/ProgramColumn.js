import React from 'react';
import './ProgramColumn.css';

class ProgramColumn extends React.Component {

    getFacultyOptions() {
        var faculty_options = []
        for (var i = 0; i < this.props.faculty.length; i++) {
            var name = this.props.faculty[i].faculty_name,
                value = this.props.faculty[i].id;
            faculty_options.push(<option
                value={value}
                key={name}>
                    {name}
                </option>)
        }
        return(faculty_options);
    }

    getFacultyValue() {
        var thing = document.getElementById("faculty_dropdown").value;
        console.log(thing);
        //GET /api/department/?q=faculty_id=2 
    }

    render() {
        return (
            <div className={this.props.className}>
                <h2 className='first'>Faculty</h2>
                <div className="select_dropdown">
                  <div className="select">
                    <select name="faculty_dropdown"
                        id="faculty_dropdown"
                        onChange={this.getFacultyValue}>
                      {this.getFacultyOptions()}
                    </select>
                  </div>
                </div>
                <h2>Department</h2>
                <div className="select_dropdown">
                  <div className="select">
                    <select name="department_dropdown">
                      <option value="Psychology">Psychology</option>
                      <option value="Computing Science">Computing Science</option>
                      <option value="Physics">Physics</option>
                    </select>
                  </div>
                </div>
                <h2>Program</h2>
                <div className="select_dropdown">
                  <div className="select">
                    <select name="program_dropdown">
                      <option value="Honours">Honours</option>
                      <option value="Open Spec">Open Spec</option>
                      <option value="Software Spec">Software Spec</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                </div>
            </div>
        );
    }
}

export default ProgramColumn;
