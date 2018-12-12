import React, { Component } from 'react';

class Form extends Component {
  constructor () {
    super();
    // 子组件, state
    this.initialState = {
      name: '',
      job: ''
    };
    this.state = this.initialState;
  }
  render () {
    const { name, job }= this.state;
    console.log(this.state)
    return (
      <form className="form-group">
        <div className="form-field">
          <label>Name</label>
          <input
          className="form-control"  
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-field">
          <label>job</label>
          <input
          className="form-control"
          value={job}
          name="job"
          onChange={this.handleChange}
          type="text"/>
        </div>
        <div className="form-field">
            <input type="button"
            
            value="Submit"
            className="btn btn-primary"
            onClick={()=>{this.submitForm()}}/>
        </div>
      </form>
    );
  }
  submitForm=()=>{
      this.props.handleSubmit(this.state);
      this.setState(this.initialState)
  }
  handleChange = event => {
    const {name , value} = event.target
    console.log(event);
    console.log(name+'------'+value)
    this.setState({
        [name]:value
    })
  }
  componentDidMount(){
      const url='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';
      fetch(url)
      .then(result=>result.json())
      .then(result=>{
          this.setState({
              data:result
          })
      })
  }
}

export default Form;
