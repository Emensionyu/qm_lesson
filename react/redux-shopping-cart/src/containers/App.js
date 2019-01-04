//根组件 provider生成 store
import React,{Component} from 'react';
import './App.css';
import { Provider} from 'react-redux';
import store  from '../store';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
            <div>
                
            </div>
            </Provider>
        )
    }
}

export default App;