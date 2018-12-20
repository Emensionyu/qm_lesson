import React,{ Component } from 'react';
function A(WrapperComponent){
    // return() =>(
    //     <div>
    //         <p>hahahahahahahhahah</p>
    //         <WrapperComponent/>
    //     </div>

    // )
    return class Text extends Component{
        render(){
            return(
                <div>
                    <WrapperComponent/>
                </div>
            )
        }
    }
}
export default A;