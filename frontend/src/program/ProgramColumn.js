import React from 'react';
import './ProgramColumn.css';

class ProgramColumn extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <h2>Faculty</h2>
                <select Classname="light_blue faculty_dropdown">
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Business">Business</option>
                </select>
                <h2>Department</h2>
                <select Classname="light_blue department_dropdown">
                  <option value="Computing Science">Computing Science</option>
                  <option value="Biology">Biology</option>
                  <option value="Physics">Physics</option>
                </select>
                <h2>Program</h2>
                <select Classname="light_blue program_dropdown">
                  <option value="Honours">Honours</option>
                  <option value="Open Spec">Open Spec</option>
                  <option value="Software Spec">Software Spec</option>
                  <option value="General">General</option>
                </select>
            </div>
        );
    }
}

export default ProgramColumn;
