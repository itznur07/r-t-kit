import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: [...getDefaultMiddleware()]
});

export default store;
