import { configureStore } from "@reduxjs/toolkit";
import Slice from '../redux/Slice'


export const store=configureStore(
    {
        reducer:{
            cart:Slice,
        }
    }
)

export default store



