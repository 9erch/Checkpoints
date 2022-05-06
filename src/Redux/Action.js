import { DECREMENT, INCRIMENT } from "./Type"

 export const increment=()=>{
     return{
         type:INCRIMENT,
         
     };
 };
 export const decrement=()=>{
    return{
        type:DECREMENT,
    };
};