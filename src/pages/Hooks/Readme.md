# React Hooks
* Only Call Hooks at the top level
   Don't call Hooks inside loops,conditions, or nested Functions
* Only Call Hooks from React Functions
* Call them from within React functional components and not just any regular javascript function

- [use State]()
- [Use Effect](#use-effect)
- [use Context](#use-context)
- useReducer

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
