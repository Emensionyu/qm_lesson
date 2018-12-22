- 代码结构
store
    状态仓库 状态多，管理 共享状态 getState setState]
     共享和管理 财务部


- 组件通信
api 
统一状态树 Store唯一

1. store.getState()读
2. store.diapatch({type:''INCREMENT})
相应的reducer计算 返回新的状态
MVVM 更新UI
<Counter />,rootEL);
store.subscribe(render);


