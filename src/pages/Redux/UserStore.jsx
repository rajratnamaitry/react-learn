import  { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
const initialState = {
    loading :   false,
    list   :   [],
    error   :   ''
}
export const fetchUsers = createAsyncThunk('user/fetchUsers', async()=>{
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await req.json()
    return data.slice(0,5);
})
const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state, action)=>{
            state.loading = false;
            state.list =  action.payload;
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false;
            state.list = [];
            state.error = action.error.message
        })
    }
}) 
export default userSlice