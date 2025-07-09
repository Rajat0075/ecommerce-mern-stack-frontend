// //Redux Store
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'

export const store = configureStore({

    reducer:{
        //Add Reducers
        counter: counterSlice,
    },
})