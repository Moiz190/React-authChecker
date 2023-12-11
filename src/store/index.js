import { configureStore } from "@reduxjs/toolkit";
import auth from './auth'
const storeSlices = configureStore({
    reducer:{auth}
})
export default storeSlices