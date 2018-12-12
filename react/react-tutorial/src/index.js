import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table'
import './index.css'
const heading = <h1 className="site-heading">Heeello React</h1>
// const Table=()=>{
//     return(
//         <div className="App">
//         <h1>Hello</h1>
//         <Table />
//         </div>
       
//     )
// }
class App extends Component {
    // jsx最终还是要编译成js的
    render() {
        return (
            <div className="App container">
                <h1>Hello,React!</h1>
                <Table/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));