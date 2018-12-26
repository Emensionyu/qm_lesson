import jsonp from './jsonp'
import {URL,PARAM,OPTION} from './config'
export function getCarousel(){
    const data=Object.assign({},PARAM,
        {
            g_tk:70107593,
            uin:0,
            platform:"h5",
            needNewCode:1,
        })
        console.log(data);
    return jsonp(URL.carousel,data,OPTION)
}
export function getNewAlbum(){}