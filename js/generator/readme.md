* 生成器函数 封装着异步执行的代码
yield 停下来，右边为promise，左边为待resolvedata
生成器函数调用得到生成器 dataGen=step()
next 一下 可被迭代
{value:上一次迭代之后的data,done:false}

Iterator