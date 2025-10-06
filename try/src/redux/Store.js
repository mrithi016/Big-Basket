import { configureStore } from "@reduxjs/toolkit";
import Slice from '../redux/Slice'
import Favslice from './Favslice'


export const store=configureStore(
    {
        reducer:{
            cart:Slice,
            favcart:Favslice,
        }
    }
)

export default store



