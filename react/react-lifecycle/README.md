生命周期
1. 组件也是有实例化的
 Class mount JSX 对象
 constructor 本职state 声明 可以用于
 数据的准备或请求 传统的面向对象思想 
 可以这样用，但是没有必要

 2. 围绕mount 挂载 首要任务
 - componentWillMount()
    
 - 性能优化 用户体验的需求
    componentDidMount()
    请求数据 组建的基本UI(加速)已渲染 MVVM setState 推迟异步执行的数据，
3. updata
componentWillUpdata
componentDidUpdata
4. unmount
    卸载 
5. props
因为MVVM数据流的流向，由外到内，来自于props的更新，
更加频繁。
React 性能优化的核心，拒绝不必要的更新 nextState，nextProps
shouldComponentUpdate(nextProps){
    if(新旧比较){
        return false;
    }
}
前面有componentWillReceiveProp(nextProps)


