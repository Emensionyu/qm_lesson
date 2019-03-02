import React ,{Component} from 'react'
import wrapCom from './hhoc'
class InputCom extends Component{
    render(){
        return(
            <div className="input">
            <input type="text" value={this.props.data} />
            </div>
        )
    }
}

export default wrapCom(InputCom,"input");