# Redux
- **Redux is predictable state container for "javascript app"**
- **Redux is not tied to React can be used for angular , vue, react.**
- **Redux stores the state of your application**

* Core Concepts
  - A store that hold the state of application
  - An action that describes the changes in the state of the application
  - A reducer which actually carries out the state transition depending on the action.

* Three principles
  1.  The state of whole application is stored in object tree within a single store.
  2.  The only way to change the state is to emit an action, an object describing what happened
  3.  To specify how the state tree is transformed by actions, you write pure reducers

## package require
- react-redux
- @reduxjs/toolkit

## Redux Counter
```JSX
// main.jsx
import { Provider } from "react-redux";
import { store } from "./pages/Redux/store"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);
```
```JSX
// store.jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    reset: (state) => {
      state.value = 0;
    },
    incremental: (state) => {
      state.value += 1;
    },
    decremental: (state) => {
      state.value -= 1;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
    counter : counterSlice.reducer,
    user    : userSlice.reducer
});

// ReduxDemo.jsx
import { useSelector } from "react-redux";
import { store, actions } from "./store";
// state
const count = useSelector((state) => state.counter.value);
<button type="button" onClick={() => store.dispatch(actions.reset())}>
  Reset
</button>
```

## Redux with Fetch API
```JSX
// UserStore.jsx
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

// UserView.jsx
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from './userStore'

const user = useSelector((state)=> state.user);
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchUsers());
}, [])

```
[Go To Top](#redux)  