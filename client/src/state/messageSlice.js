import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersForSidebar = createAsyncThunk(
    "messages/fetchUsersForSidebar", 
    async (_, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:3001/getUsers")
            if(!response.ok) {
                throw new Error("Failed to fetch users for sidebar")
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        } 
    }
);

export const fetchSendMessage = createAsyncThunk(
    "messages/fetchSendMessage",
    async(_, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3001/messages/send/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringfy({ message })
            });

            const data = await response.json();
            return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    } 
);

export const fetchGetMessages = createAsyncThunk(
    "messages/fetchGetMessages", 
    async(_, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3001/messages/${id}`)

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState =  {
    list: [],
    message: [],
    messages: [],
    status: "idle",
    error: null,
}
 
const messageSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsersForSidebar.pending]: (state) => {
            state.status = "loading";
        },
        [fetchUsersForSidebar.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.list = action.payload;
        },
        [fetchUsersForSidebar.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
        [fetchSendMessage.pending]: (state) => {
            state.status = "loading";
        },
        [fetchSendMessage.fulfilled]: (state, action) => {
            state.status = "succeded";
            state.message = action.payload;
        },
        [fetchUsersForSidebar.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
        [fetchGetMessages.pending]: (state) => {
            state.status = "loading";
        },
        [fetchGetMessages.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.messages = action.payload;
        },
        [fetchGetMessages.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
    },
});

export default messageSlice.reducer;

