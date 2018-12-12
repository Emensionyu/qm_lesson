JSX React 模板的语法
Component render（）
函数式组件 return()
template 跟 vue不一样，在JS里 JSX babel 
1. JSX 是一切组建的基础，函数式组件，已返回JSX为目标
2. JSX真的就是JS，可以执行一切JS
3. React JSX React.createElement()更优雅的表达 可读性

JSX 用来描述UI信息的，React.createElement()更能表达这点

不管是小程序 vue react 都是一模一样的 都是MVVM
模板 数据绑定的{} {{}}
JSX不支持 wx:for 还好它的纯JS的，可以自己写 逻辑，灵活。
(
    <ul>
    {
        users.map((user,index)=><li
        key={index}>{user.name}-{user.type}</li>)
    }
    </ul>
)