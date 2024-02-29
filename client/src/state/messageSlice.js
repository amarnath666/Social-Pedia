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
    async({ id, message }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3001/messages/send/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message })
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
    async(id, thunkAPI) => {
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
    name: "messages",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsersForSidebar.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsersForSidebar.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.list = action.payload;
            })
            .addCase(fetchUsersForSidebar.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchSendMessage.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSendMessage.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload;
            })
            .addCase(fetchSendMessage.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchGetMessages.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGetMessages.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.messages = action.payload;
            })
            .addCase(fetchGetMessages.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default messageSlice.reducer;
