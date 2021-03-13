import {createSlice, isImmutableDefault} from "@reduxjs/toolkit";
export const itemSlice= createSlice({
    name:"items",
    initialState:{
        toDoItems:[],
        count:0
    },
    reducers:{
        addItem: (state,action) => {
            
            state.toDoItems.push(action.payload);
            state.count+=1;
        },
        removeItem: (state,action) => {
            let index=-1
            for (let i =0; i< state.toDoItems.length;i++){
                if(state.toDoItems[i].id==action.payload.id){
                    index = i;
                    break;
                }
            }
          

           if (action.payload.isComplete){
               state.toDoItems[index].isDone=true;
           }else{
               state.toDoItems.splice(index,1);
           }
           console.log(state.toDoItems);

           
       
    }
    }
});
export const{addItem,removeItem}=itemSlice.actions;
export default itemSlice.reducer;