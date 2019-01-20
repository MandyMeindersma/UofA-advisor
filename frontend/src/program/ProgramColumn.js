import React from 'react';
import './ProgramColumn.css';

class ProgramColumn extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <h2 className='first'>Faculty</h2>
                <div class="select_dropdown">
                  <div class="select">
                    <select name="faculty_dropdown">
                      <option value="Science">Science</option>
                      <option value="Arts">Arts</option>
                      <option value="Business">Business</option>
                    </select>
                  </div>
                </div>
                <h2>Department</h2>
                <div class="select_dropdown">
                  <div class="select">
                    <select Classname="department_dropdown">
                      <option value="Computing Science">Computing Science</option>
                      <option value="Biology">Biology</option>
                      <option value="Physics">Physics</option>
                    </select>
                  </div>
                </div>
                <h2>Program</h2>
                <div class="select_dropdown">
                  <div class="select">
                    <select Classname="program_dropdown">
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
