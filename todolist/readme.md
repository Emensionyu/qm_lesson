- 模板要有if else 
模板里存在业务逻辑 wx：if wx:else wx for

界面有状态 
登入前登入后状态


数据驱动界面状态
hasuserInfo 决定了界面有两种 wx;if wx:else

- 微信的生态及机制
    小程序的优势 可以获得用户信任信息，在微信里，
    小程序分享到讨论组

用户信息，隐私，要获用户许可

button 询问 特殊的按钮 open-type="getuserInfo"
bindgetuserinfo=''
block 现实的过程
太直接的

- setData()
    改变data里的数据的值
    并且拥有让界面里相关的部分热更新的能力
- wx：key
循环一定要加一个唯一性的key
列表值发生变化，如果更替变换，整个列表的wxml，太浪费了，
key 找到相应的,进行更新

- 设计数据
lists=[已完成两项，未完成8项]
lists 全部列表
doneLists=[]
undoneLists[]
v-for="{{lists}}"
currentState="all"

v-if+v-for

界面状态
 多种状态
 1. tabbar active UI状态 => 数据驱动，currentState='all'
 2. 任务列表  列表数据 Ui状态 除了lists 外，只要再加一个就行
 currentList（承担计算的能力） 当前列表只有一个列表
 
我要能加强下面的练习就好了
* 脚步移动计时性训练 保持平衡
* 紧逼防守这点最重要
* 接球练习，最好学会接到不同方向的球
okokokok
