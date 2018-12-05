import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import Single from './components/Single'
import App from './App'
import './style.css';

render(
    <BrowserRouter>
        <div>
        <Route exact path="/" component={App} /> 
        {/* <Route path="/beer" component={Single} />  */}
        <Route  path="/search/:searchTerm" component={App}  /> 
         </div>
    </BrowserRouter>,document.getElementById('root'));//首页路由 声明路由访问的route 定义规则