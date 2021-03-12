import {createSlice, isImmutableDefault} from "@reduxjs/toolkit";
export const itemSlice= createSlice({
    name:"items",
    initialState:{
        toDoItems:[],
        doneItems:[],
        count:0
    },
    reducers:{
        addItem: (state,action) => {
            
            state.toDoItems.push(action.payload);
            state.count+=1;
        },
        removeItem: (state,action) => {
          
           console.log(action.payload);
           newList= [];
           for(const item of state.toDoItems){
               if (item.id != action.payload){
                   console.log(item.id);
                   newList.push(item);
               }else{
                   state.doneItems.push(item);
               }
           }
           state.toDoItems=newList;
           
           
       }
    }
});
export const{addItem,removeItem}=itemSlice.actions;
export default itemSlice.reducer;