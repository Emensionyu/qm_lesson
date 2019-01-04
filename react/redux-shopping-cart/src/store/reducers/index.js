import { combineReducers} from 'redux';
import productReducer from './productReducer';
import floatCartReducer from './floatCartReducer';
import updataCartReducer from  './updataCartReducer';

// redux  状态设计 
//构建全局共享状态

export default combineReducers({
    products:productReducer,//商品查看页面 
    cartProducts:floatCartReducer, //购物车商品
    cartTotal:updataCartReducer,//
    // sort:sortReducer,//排序的reducer
    // filter:filterReducer,//过滤操作的reducer


})