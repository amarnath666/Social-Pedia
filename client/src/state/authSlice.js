import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunks for fetching users, sending messages, and getting messages
// export const fetchUsersForSidebar = createAsyncThunk(
//   "auth/fetchUsersForSidebar",
//   async (_, thunkAPI) => {
//     try {
//       const token = selectToken(thunkAPI.getState());
//       const response = await fetch("http://localhost:3001/getUsers", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         }
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch users for sidebar");
//       }
//       const data = await response.json();
//       console.log("Fetched users:", data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchSendMessage = createAsyncThunk(
//   "auth/fetchSendMessage",
//   async ({ id, message }, thunkAPI) => {
//     try {
//       const token = selectToken(thunkAPI.getState());

//       const response = await fetch(`http://localhost:3001/messages/send/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({ message })
//       });

//       const data = await response.json();
//       return data;
//     } catch(error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchGetMessages = createAsyncThunk(
//   "auth/fetchGetMessages",
//   async(id, thunkAPI) => {
//     try {
//       const token = selectToken(thunkAPI.getState());

//       const response = await fetch(`http://localhost:3001/messages/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         }
//       });

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// Initial state
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  // list: [],
  // message: [],
  // messages: [],
  // status: "idle",
  // error: null,
};

// authSlice with reducers and extraReducers
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
//   extraReducers: (builder) => {
//     builder
//     //   .addCase(fetchUsersForSidebar.pending, (state) => {
//     //     console.log("fetchUsersForSidebar.pending: Loading...");
//     //     state.status = "loading";
//     //   })
//     //   .addCase(fetchUsersForSidebar.fulfilled, (state, action) => {
//     //     console.log("fetchUsersForSidebar.fulfilled: Data loaded successfully", action.payload);
//     //     state.status = "succeeded";
//     //     state.list = action.payload;
//     // })
    
//     //   .addCase(fetchUsersForSidebar.rejected, (state, action) => {
//     //     console.error("fetchUsersForSidebar.rejected: Failed to load data", action.payload);
//     //     state.status = "failed";
//     //     state.error = action.payload;
//     //   })
//       .addCase(fetchSendMessage.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchSendMessage.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.message = action.payload;
//       })
//       .addCase(fetchSendMessage.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(fetchGetMessages.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchGetMessages.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.messages = action.payload;
//       })
//       .addCase(fetchGetMessages.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
});

// Export selectToken and authSlice actions
export const selectToken = (state) => state.auth.token;

export const {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setPosts,
  setPost,
} = authSlice.actions;

// Export authSlice reducer
export default authSlice.reducer;
