import React from 'react';
import './Row.css';

class Row extends React.Component {

    constructor(props) {
      super(props);
      this.getCourseValue = this.getCourseValue.bind(this);
    }

    getCourseValue() {
        var value = document.getElementById(this.props.classNameidThing).value;
        console.log(value);
        var url = "http://localhost:8000/api/course/?course_name=" + String(value);
        fetch(url)
          .then(res => res.json())
          .then(text => {
              this.setState({data: text});
              this.setState({promiseDone: true});
              this.parseNumbers(text);
          });
    }

    parseNumbers(text) {
        var number_options = []
        for (var i = 0; i < text.length; i++) {
            number_options.push(<option
                value={text[i].id}
                key={text[i].course_num}>
                    {text[i].course_num}
                </option>)
        }
        this.number_options = number_options;
        this.setState({ state: this.state });
    }

    componentDidMount() {
        this.getCourseValue()
    }

    render() {
        return (
            <div className={this.props.className}>
                <select className="class_dropdown"
                    id={this.props.classNameidThing}
                    onChange={this.getCourseValue}>
                  <option value="CMPUT">CMPUT</option>
                  <option value="MATH">MATH</option>
                  <option value="HIST">HIST</option>
                  <option value="ENGL">ENGL</option>
                  <option value="ANTHR">ANTHR</option>
                </select>
                <select className="class_dropdown number">
                  {this.number_options}
                </select>
            </div>
        );
    }
}

export default Row;
