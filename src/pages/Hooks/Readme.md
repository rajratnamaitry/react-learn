# React Hooks
- Only Call Hooks at the top level and from React Functions
- Don't call Hooks inside loops,conditions, or nested Functions
- Call them from within React functional components and not just any regular javascript function

    - [Use State](#use-state)       -   State
    - [Use Effect](#use-effect)     -   Side Effect
    - [use Context](#use-context)   -   Context API
    - [Use Reducer]                 -   Reducers
    - [Use Callback vs Use Memo](#use-callback-vs-use-memo)
    - [Use Ref](#use-ref)
    - [Use Custom](#use-custom)

## Use State
```JSX
// useStateObj.jsx
const [name, setName] = useState({
    firstName: '',
    lastName: ''
})
<input  value={name.firstName} onChange={(e)=> setName({...name, firstName: e.target.value})}/>
```
## Use Effect
* The Effect Hook lets you perform side effects in functional components
* It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount

1. [Render every times](#1-render-every-times)
2. [Render conditions](#2-conditional-run-effect-and-2nd-argu)
3. [Render once](#3-render-once)
4. [UnMount component](#4-unmount-component)

### 1. Render every times
Every time render useEffect executed
```JSX
// useEffect.jsx 
useEffect(() => {
   console.log("useEffect");
   document.title = "Count " + count;
});
// Every time render console.log prints
```
### 2. Render conditions
Conditional Run Effect and arguments
```JSX
// useEffectConditional.jsx
useEffect(() => {
   console.log("useEffect");
   document.title = "Count " + count;
},[count]);
// if count change then  console.log prints
```
### 3. Render Once 
```JSX
// useEffectOnce.jsx
const logMouse = (e)=>{
   console.log('logMouse fn')
   setX(e.clientX)
   setY(e.clientY)
}
useEffect(()=>{
   console.log('useEffect fn');
   document.addEventListener('mousemove',logMouse)
},[])
// Ex. Fetch Data on id change 
// Output
// useEffect fn
// (207) logMouse fn
```
### 4. UnMount component
```JSX
// useEffectCleanUp.jsx
useEffect(()=>{
   console.log('useEffect fn');
   document.addEventListener('mousemove',logMouse)
   return ()=>{
      console.log('useEffect unmount')
      document.removeEventListener('mousemove',logMouse);
   }
},[])
// Output
// useEffect unmount 
```
## Use Context
Context provids a way to pass data through the component tree without
having to pass props down manually at every level.

* Create Context
* Provide Context
* Consume Context

```JSX
export const UserContext = React.createContext();
export const UserChannelContext = React.createContext();
 // Parent component
<UserContext.Provider value={'From hook index'}>
    <UserChannelContext.Provider value={'From nasted provider hook index'}>
        <Bcomp></Bcomp>
    </UserChannelContext.Provider>
</UserContext.Provider>

// Nasted component
import { UserContext, UserChannelContext } from "./index";

<UserContext.Consumer>
{
    user => {
    return <UserChannelContext.Consumer>{
        channel => {
            return <div>Child receive {user} - {channel}</div>
        }
        }</UserChannelContext.Consumer>
    }
}
</UserContext.Consumer>

// Alternate 
const user = useContext(UserContext);
const channel = useContext(UserChannelContext);
return (
    <div>
        {user} - {channel}
    </div>
)
```
## Use Reducer
useReducer is a hooks that is used for state management
It is an alternative to useState
useState is built using useReducer

```JSX
const initial = 0;
const reducer = (state,action) =>{
    switch (action) {
        case 'Reset':
            return initial;
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
    }
}
export default function UseReducer() {
    const [count,dispatch] = useReducer(reducer,initial);
  return (
    <div>UseReducer
        {count}
      <button type="button" onClick={() => dispatch('Reset')}> Reset </button>
      <button type="button" onClick={() => dispatch('Increment')}>Increment </button>
      <button type="button" onClick={() => dispatch('Decrement')}>Decrement </button>
    </div>
  )
}

```

### Use Reducer with Use Context
## Use Callback vs Use Memo
| Use Callback | Use Memo |
| --- | --- |
|Caches the provided function instance itself | Invokes the provided function and Caches its result |
|Need to cache a function use callback | Cache the result of an invoked function|
| --- | Memo hook can be used for performance optimization |

## Use Ref
Can be create a generic component container which can hold a mutable value similar to instance property on class component does not cause render when the data change
```JSX
// UseRefTwo.jsx
const inputRef = useRef(null);
useEffect(()=>{
    inputRef.current.focus();
},[])
<input type="text" ref={inputRef} ></input>
```
## Use Custom
Can use as share code between component

```JSX
// Custom/CustomHooks.jsx
const useDocTitle = (count)=>{
    useEffect(() => {
        document.title = `Click ${count}`;
    }, [count]);
}
export default useDocTitle;
```