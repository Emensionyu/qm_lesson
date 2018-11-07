- 数据存储
1.  适合存贮小的结构简单的数据，数据复杂JSON.stringfy()
JSON.parse() 一般大小是2-6m间
中奖次数和奖品，不用去后端取
2. cookie 
    cookie 就是一个字符串，key=value;
    key2=value2 来存储非常重要的信息，并且在每次http请求时都会带上
- indexDB 让前端释放野心的数据库，前端的mongodb
    1. request
    db =window.indexDB().open(dbname,deversion)
    2. 异步的，
    onsuccess 开始数据业务
    onupgradeneeded 更新数据库
    db.createobjectStore()
    objectStore.createIndex('email','email',{unique:true})
    3. 事务，transation 让数据存储更安全

