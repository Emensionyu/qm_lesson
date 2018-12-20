import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

let muiTheme = getMuiTheme({
  fontFamily: 'Microsoft YaHei'
});

class MainWindow extends React.Component {
  state = {
    userName: "",
    password: "",
    open: false
  }
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.root}>
          <TextField 
            hintText="请输入用户名"
            value={this.state.userName}
            onChange={(event)=>{this.setState({userName:event.target.value})}}
            />
          <TextField 
            hintText="请输入密码"
            type="password"
            value={this.state.password}
            onChange={(event)=>{this.setState({password:event.target.value})}}
            />
            <div style={styles.button_container}>
                <RaisedButton label="登入" primary={true} onClick={()=>{}}/>
                
                <RaisedButton label="注册" primary={false} onClick={()=>{}}/>

              
            </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
const styles = {
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 40
    },
    buttons_container: {
        paddingTop: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

ReactDOM.render(<MainWindow />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
