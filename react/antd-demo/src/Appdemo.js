import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import { Table, Form, Icon, Input, Button } from 'antd';
import './App.css';
const FormItem = Form.FormItem;

class App extends Component {
  state = {
    loading: false,
    iconLoading: false
  }
  enterLoading = () => {
    this.setState({
      loading: true
    })
  }
  enterIconLoading = () => {
    this.setState({
      iconLoading: true
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }];
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '朝阳区'
    }, {
      key: '2',
      name: '吴彦祖',
      age: 42,
      address: '香港'
    }]
    
    return (
      <div>

        <Form layout="inline" onSubmit={this.handleSubmit}>
          {/* <FormItem> */}
            <Input placeholder="Username"
            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
            />
          {/* </FormItem> */}
          <Input placeholder="Password"
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
            />
            <Button type="primary" htmlType="submit">Login </Button>
        </Form>
        
        <Table dataSource={dataSource} columns={columns}/>
        <Button type="primary" loading>Loading</Button>
        <br/>
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.enterLoading}>
          Click me!
        </Button>
      </div>
    );
  }
}

export default Appdemo;
