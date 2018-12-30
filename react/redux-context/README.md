redux 父子组件 父子组件传值很麻烦
context 新的希望 react-redux 基于它实现全局状态
打破层次关系，实现共享
redux? context

- context API redux 依赖他
childContextTypes={
    store:
}


- context 四步
- childContextTypes 顶层组件中规定类型
- getchildContext 顶层组件中设置
-  后代组件通过contextTypes规定数据类型
-  后代组件this.context 获取数据
全局的store
这个步诹太烦了 不是react 数据流语法的烦，context 
api 代码的重复 违反了dry 
生命周期 _setUp() contextTypes
connect rezct-redux HOC

- connect 封装 有关的context的操作都交给它
- 后代组件，只需要做自己的事
