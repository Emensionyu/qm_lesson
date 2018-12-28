
export const createStore=(state,
storeChange)=>{
    // 订阅发布者
    const listeners=[];
    let store=state||{};
    const subscribe=(listen)=>listeners.push(listen);
    const dispatch=(action)=>{
        console.log(store);
        const newStore=storeChange(store,action)
        //状态的写操作
        // listen是什么 对应组建的render
        store=newStore;
        console.log(store);
       listeners.forEach(item=>item())  
    }
    const getStore=()=>{
        return store
    }


    return {store,dispatch,subscribe,getStore}
}