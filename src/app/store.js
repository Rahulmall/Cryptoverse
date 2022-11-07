import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import {cryptoNewsapi} from '../services/cryptoNewsapi'
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsapi.reducerPath]:cryptoNewsapi.reducer,
    }
})