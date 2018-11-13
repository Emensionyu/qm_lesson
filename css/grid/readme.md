layout cssl里布局是不能说的秘密，css里直接表达布局是不完整的
1. 网页跟平面设计媒体一样，好看。
不好时 由table来做布局
tabble 天生来展示数据的，也只用来这一项
    table不适合现代媒体
2. 标签的盒模型 比较慢，容易出问题 margin合并
    浮动问题，定位问题
    后来出现了成熟的浮动布局，精确定位，现代的 display:flex display:table
    标签能力及表现，加css属性
    布局layout=行row列column的规划
3. 由2 推出圣杯式布局
4. 圣杯式 DiV+css
兼容性一点问题都没有的三列式布局，主列和两边侧边栏。
pc时代，标签div 核心使用浮动 block=> inline 但是宽度还在
圣杯式布局和双飞翼经典布局的 三栏式布局，效果基本相同。两边两联宽度固定，中间栏宽度自适应。中间栏放最前面，为的是显示最优的性能，放在前面的html先下载先渲染。兼容性好，pc IE8 ->
chrome/Edge,
marfin 负值 float left 主列 100% 侧边栏margin 负值
区别：圣杯式，position:relative+left/right -200px
双飞翼：给main加子元素 ，main 都是都位子，但是双飞翼不需要让两边侧边栏再移位置了