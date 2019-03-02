import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class Autof extends Component {
    componentDidMount () {
    //   this.input.focus()
    //   console.log(this.input)
    //   console.log(this.name)
    //   console.log(this.button)
    }
    // inputElement = React.createRef();
    // showheight(){
    //     console.log(this.p.offsetHeight)
    //     console.log(ReactDOM.findDOMNode(this.p).offsetHeight);
    // }
    handlechange(e){
        this.props.onchange(this.ref.value)
    }
    render () {
      return (
          <div>
            <input type="text"  ref={ref=>this.ref=ref}
            onChange={this.handlechange.bind(this)}
            />
        {/* <p ref={(p)=>this.p=p} onClick={this.showheight.bind(this)}
        
        >{this.props.content}</p> */}
        <button ref={(button)=>this.button=button}>ref实例</button>
        </div>
      )
    }
  }
  
  export default Autof