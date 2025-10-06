import { createSlice } from "@reduxjs/toolkit";


const storedItems=localStorage.getItem('favItems')

const initialState={
    favitems:storedItems?JSON.parse(storedItems):[]
}

const Slice=createSlice(
    {
        name:'favcart',
        initialState,
        reducers:{


            favPlus:(state,action)=>{
                  const newItem=action.payload
                //   console.log(state.cartitems,"from redux add")
                  const  existitem=state.favitems.find(item=>item.id===newItem.id)
                 
                  if(existitem){
                    existitem.quantity += newItem.quantity
                }else{
                    state.favitems.push(
                        newItem
                    )
                  }


                  localStorage.setItem('favItems',JSON.stringify(state.favitems))


            },


            favMinus:(state,action) =>{
                state.favitems=state.favitems.filter(Items=>Items.id !== action.payload.id);
                localStorage.setItem("favItems",JSON.stringify(state.favitems));
            },


           


        }
    }
)


export default Slice.reducer;
export const {favPlus,favMinus}=Slice.actions;


