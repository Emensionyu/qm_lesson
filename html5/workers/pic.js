self.addEventListener('message',(event)=>{
    const data=event.data;
    //不可以引用dom 
    //使用httmrequest向图片的地址发出请求 
    console.log(data);
    for(let item of data.pics){
        let xhr=new XMLHttpRequest();
        xhr.open('GET',item.src,true);
        xhr.responseType='blob'
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4){
                self.postMessage({  
                 id:item.id,
                 result:xhr.response,
            

                })
            }
        }
        xhr.send();

    }
})