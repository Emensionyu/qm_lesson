import React ,{Component} from 'react';
import wrapCom from './hhoc';

class textname extends Component{
    render(){
        return(
            <div className="teat">
            <input type="button"  value={this.props.data}/>
            </div>
        )
    }
}
export default wrapCom(textname,"button")