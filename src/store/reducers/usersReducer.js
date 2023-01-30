import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUser } from "../actions/usersAction";

const usersReducer = createSlice({
  name: "usersReducer",
  initialState: {
    users: [],
    usersContainer: [],
    loader: false,
    errors: {},
    user: {}
  },
  reducers: {
    filteredUsers: (state, action) => {
      state.users = state.usersContainer.filter((user) =>
        user.name.toLowerCase().includes(action.payload)
      );
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, actions) => {
      state.loader = true;
    },
    [getUsers.fulfilled]: (state, actions) => {
      state.loader = false;
      state.users = actions.payload;
      state.usersContainer = actions.payload;
    },
    [getUsers.rejected]: (state, actions) => {
      state.loader = false;
      state.errors = actions.payload;
    },
    [getUser.pending]: (state, actions) => {
      state.loader = true;
    },
    [getUser.fulfilled]: (state, actions) => {
      state.loader = false;
      state.user = actions.payload;
    },
    [getUser.rejected]: (state, actions) => {
      state.loader = false;
      state.errors = actions.payload;
    }
  }
});

export const { filteredUsers } = usersReducer.actions;
export default usersReducer.reducer;
