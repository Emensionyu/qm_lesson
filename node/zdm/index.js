const request=require('request');
const cheerio=require('cheerio');

// request('http://www.smzdm.com/youhui/',(err,req)=>{/*function(err,req) es5版本 */
// if(!err){
//     console.log(req.body);
// }else{
//     console.log(err);
// }

// });
request('https://www.duitang.com/p/atlas/?id=99285025/',(err,req)=>{
    if(!err){
        var body=req.body;
        console.log(body);
        // cheerio将内存中html模拟浏览器的方式渲染网页
        var $=cheerio.load(body,{decodeEntities:false });
        //document.querySelector()
        $('.list.list_preferential').each((i,item)=>{
            // console.log(i,item);
            // console.log('---------------');
            var $title=$('.itemName a',item);
            var url=$title.attr('href');
            var title=$title.html();
            // console.log(url,title);
            var h1=$title.children().text().trim();
            var image=$('img',item).attr('src');
            // var desc=$('.lrInfo',item).html().trim();
            // var mall=$('.botPart a.mall',item).text().trim();
            // console.log(title,h1,url,img,desc,mall);
            console.log(image);
            // console.log(h1);
        });


    }
})


