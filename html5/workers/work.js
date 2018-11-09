//接收消息 self代表当前worker
self.addEventListener('message',function(e){
    var data=e.data;
    // console.log(e);
    switch(data.cmd){
        case 'stsrt':
        self.postMessage('WORKER STARTDE');

        break;
        case 'stop':
        self.postMessage('WORKER STOPED'+data.msg);
        break;
    }

})