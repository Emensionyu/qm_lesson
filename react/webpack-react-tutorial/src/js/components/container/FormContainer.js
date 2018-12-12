import React,{Component} from 'react'//结构
import Input from "../presentational/input";

class FormContainer extends Component{
    constructor(){
        super();
        this.state={
            seo_title:""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    render(){
        // wxml 
        const seo_title=this.state.seo_title
        return (
            <form id="article-form">
                <Input
                text="SEO title"
                label="seo_title"
                type="text"
                id="seo_title"
                value={seo_title}
                handleChange={this.handleChange}
                /> 
            </form> 
        );
    }//向外输出模板
    //等待子组件来交流 父子传递的地方
    handleChange(event){
        this.setState({
            [event.target.id]:event.target.value
        })
    }


}
export default FormContainer;