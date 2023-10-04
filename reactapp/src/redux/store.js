import { configureStore} from "@reduxjs/toolkit";
import UserSlice from "../redux/userSlice";
export default configureStore({
    reducer:{
        user:UserSlice.reducer
    }
})