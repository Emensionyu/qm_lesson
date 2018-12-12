import React, { Component } from 'react';
class Form2 extends Component{
    state={
        value:"haha",
        value2:"暂时没有"
    }
    handlechange=(event)=>{
        this.setState({
            value:event.value
        })

    }
    submit(){
        let value=this.state.value;
        this.setState({
            value2:value
        })

    }
    render(){
        const value=this.state.value
        const value2=this.state.value2
        
        return (
           <form className="form-group">
           <div className="form-field">
               <label >name
               </label>
               <input type="text"
               className="form-control"
               name="name"
               value={value}
               onChange={this.handlechange}
               
               />
            </div>
               <div>
                   <input type="button"
                   value="submit"
                   className="btn btn-primary"
                   onClick={()=>{this.submit()}}
                  
                   />
               </div>
               {/* <div class="ui top attached tabular menu">
                <div class="active item">Tab</div>
                </div>
                <div class="ui bottom attached active tab segment">
                 <p>{value}</p>
                </div> */}
           
           </form>
            

        )
    }
}
export default Form2;