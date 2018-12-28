import React,{ Component} from 'react';
import PropTypes from 'prop-types';
export default class Head extends Component{
    static contextTypes={
        store:PropTypes.object,
        subscribe:PropTypes.func,
        getStore:PropTypes.func,
        dispatch:PropTypes.func

    }
    constructor(props){
        super(props);
        this.state={};
    }
    componentWillMount=()=>{
        const {subscribe }=this.context;
        this._upState();
        subscribe(()=>this._upState())
    }
    //api构造需要 传参函数会运行
    _upState(){
        const { getStore } =this.context;
        this.setState({
            ...getStore()
        })
        console.log(getStore);


    }
    render()
    {
        return(
            <div className="head">{this.state.head}</div>
        )
    }
}