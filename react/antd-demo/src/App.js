// 组件？ 封装了或组合了一些html, 完成一个特定的功能，并以一个自定义标签的形式向处提供，html, css,js
// antd UI 风格， 小蚂蚁 大力量， 配制优先
import React, { Component } from 'react';
import { 
  Form, Icon, Input, Button 
} from 'antd';
import './App.css'
const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {
  render () {
    const {
          getFieldDecorator,
          getFildsError,
          getFieldError,
          isFieldTouched
      }=this.props.form;
      const userNameError=isFieldTouched
      ('username')&&getFieldError
      ('username');
      const passwordError=isFieldTouched
      ('password')&&getFieldError
      ('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
      <FormItem 
        validateStatus={userNameError?
        'error':''}
        help={userNameError || ''}
    
    >
      {
          getFieldDecorator('username',
           {
            rules: [{ required: true, message: 'Please input your username!' }],
          })
          (
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}

        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        {/* //每个验证规则 */}
        <FormItem>
            <Button 
            type="primary"
            htmlType="submit" >Login</Button>
        </FormItem>
      </Form>
    )
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      this.props.form.validateFields(
          (err,values)=>{
              if(!err){
                  console.log(values);
              }else{
                  console.log(err);
              }
          }
      )//通过所有验证了调用

  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
// console.log(WrappedHorizontalLoginForm);

class App extends Component {
  render () {
    return (
      <div >
        <WrappedHorizontalLoginForm /> 
      </div>
    );
  }
}

export default App;
