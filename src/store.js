import { configureStore } from "@reduxjs/toolkit"
import { userSLice } from "./features/UserSlice"

export default configureStore({
  reducer: {
    user: userSLice.reducer
  }  
})