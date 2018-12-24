import { ADD,DELETE} from '../constants/todos';


export const add=(data)=>{
    return{
        data,
        type:ADD
    }
}
export const del=(id)=>{
    console.log("action====+"+id);
    return{
        id,
        type:DELETE
        
    }
}