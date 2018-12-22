import * as React from 'react';
import './App.css';
import ProgressBar from './progress';

class App extends React.Component {
  public state={
    color:'lightblue',
    showInfo:true,
    step:0,
    total:12
  }
   public decline=()=>{
     let step=this.state.step-1;
     if(step<0){
       step=0;
     }
     this.setState({step})
     

  }
   public increase=()=>{
    let step=this.state.step+1;
    if(step>this.state.total){
      step=this.state.total;
    }
    this.setState({step})


  }
  public render() {
    return (
      <div className="App">
        <div>
          <p>
            <button onClick={this.decline}>-</button>
            <button onClick={this.increase}>+</button>
            <label>step:</label>
            {this.state.step}

          </p>
        </div>
        <ProgressBar step={this.state.step}
          total={this.state.total}
          showInfo={this.state.showInfo}
          color={this.state.color}/>
      </div>
    );
  }
}

export default App;
