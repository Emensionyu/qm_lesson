-  隐患？getState 读是无所谓 修改状态的值， 只有 按规矩（action）办，
   action对状态写 所有组件都 遵守的规范 dispatch --状态的安全性非常重要--
   state.body.text="我是经过head修改后的body";
- redux 让所有的状态共享，读可，写要遵守规则，
只有 action可以修改state（执行相应的reducer），
组件只能dispatch一个action

- reducer 是闺房，不可以直接调用的
只有action才可以调用 
组件帅哥 不能见面 reducer小姐
要保护好数据 设置了reducer 提供并且精确计算状态的函数，
组件只有dispatch一个action才能执行