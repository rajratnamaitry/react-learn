## Fundamentals of React
- [Class Components State](#class-components-state)
- Function Components
- Fragment
- [Ref](#ref)
- [Portal](#portal)
- [Pure Components](#pure-components)
- [Method As Props](#method-as-props)
- [Life Cycle](#life-cycle)
- [Error Boundary](#error-boundary)
- [Event Bind Class](#event-bind-class)
- [Higher Order Components (HOC)](#higher-order-components-hoc)
- [Render Props](#render-props) 
- [Context](#context) 
## Class Components State 
State Used for maintain data of current class data.

```JSX
// Class component
constructor() {
    super()
    this.state = {
        name: 'state',
        count: 0
    }
}
// Use setState Fn to state object
// Arguments
// 1.Object 
// 2.Call back fn
this.setState({
    count:this.state.count+1
},()=>{
    console.log('callback value',this.state.count)
})
console.log('click value',this.state.count)
/** 
* If this Fn call 3 times then Output will be
* click value 0
* click value 0
* click value 0
* callback value 1
*/
// To avoid this use prev argument 
this.setState((prev, props)=>({
    count:prev.count+1
}),()=>{
    console.log('callback value',this.state.count)
})
console.log('click value',this.state.count)
/** output
* click value 0
* click value 0
* click value 0
* callback value 3
*/
```
## Ref
### Refs input
* Create Ref and assign to element as attribute.
```JSX
    // Initialization
    this.inputRef = React.createRef();
    // Assignment
    <input type="text" ref={this.inputRef} />
    // Usage
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
```
* Set Call back ref can be use for same result only then can be access element directly.
```JSX
    // Initialization
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = element =>{
        this.cbRef = element;
    }
    // Assignment
    <input type="text" ref={this.setCbRef} />
    // Usage
    if(this.cbRef){
        this.cbRef.focus();
    }
```
### Ref Component 
* When you Declare attribute to Component then Component can access all methods

```JSX
// Initialization
this.compRef = React.createRef();
// Declaration
<Input ref={this.compRef} ></Input>
// Usage 
// using input Components focusInputFn in parent Component
this.compRef.current.focusInputFn('input');
```

### Forward Ref Component
* React.forwardRef can be use to create ref of current Component
* No need to define React.createRef in child Component

```JSX
const FrwdInpuRef = React.forwardRef((props,ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default FrwdInpuRef
```
## Portal
Using for you can control Dom root

```JSX
// Portal.jsx
import ReactDOM  from 'react-dom';
export default function Portal() {
    return ReactDOM.createPortal(
        <div>Portal element demo</div>,
        document.getElementById('portal-root')
    )
}

// App.jsx
<Portal/>

// Index.html
<div id="root"></div>
<div id="portal-root"></div>
```
## Pure Components
A pure Comp implements shouldComponentUpdate with a shallow prop and state comparison
    
* Use all Children pure comp to avoid unexpted  behaviour
* Never mutate the state. Always return a new Object.
    SC of prevState with currentState
    SC of prevProps with currentProps

```jsx
export default class PureComp extends PureComponent {

}
```

| ## Regular component | ## Pure component
| --- | --- |
| A regular comp does not implement the shouldComponentUpdate .it always return true by default | A pure comp on the other hand implement shouldComponentUpdate with shallow props and state comparison |

### Shallow comparison
* Primitive Types 'string' == 'string' return true;
* Complex Types  if a and b reference the exact same Object.

### Memo v16 feature
    Similar to Pure component
```jsx
export default React.memo(MemoComp)
```
## Method As Props
   
```JSX
// parent Components
constructor() {
    super();
    this.state = {
        name:"parent"
    }
    this.getParent = this.getParent.bind(this);
}
getParent(child){ 
    alert(`click on method ${this.state.name} from ${child}`)
}
render() {
    return (
        <ChildMethodAsProps getParentHandler={this.getParent} ></ChildMethodAsProps>
    )
}
// child
export default function ChildMethodAsProps(props) {
    return (
        <button onClick={()=>props.getParentHandler('child2')} >Child button</button>
    )
}
```
## Life Cycle
### Initial Load
* constructor
* static getDerivedStateFromProps(props, state)
    * When the state of the component depends on changes in props over time.
    * Set the State
* render
    * Only Required Method in class component
    * Read props & State and return jsx 
    * Pure Functions
    * Do not change state or interact with DOM or make ajax calls.
    * Children Comp lifecycle methods are also executed.
* componentDidMount 
    * Invoked immediately after a component and all its Children components have been rendered to the Dom
    * Use for Interact with the DOM or perform any ajax calls to load data
    *

### Updating LifeCycle
* static getDerivedStateFromProps(props, state)
    * Method is called every time a component is re-rendered
* shouldComponentUpdate(nextProps, nextState)
    * Dicates if the component should re-render or not
    * Performace optimization
    * Don't use Http request or setState
* render
* getSnapshotBeforeUpdate(prevProps,prevState)
    * Called right before the changes from the the virtual DOM are to be reflected in the DOM
    * Capture some information from the DOM
    * Method will either return null or return a value Returned value will be passed as the third parameter to next method
* componentDidUpdate(prevProps, prevState, snapShot)
    * Called after the render is finished in the re-render cycles.
    * Can be used for Call Ajax calls

### Unmounting Phase
* componentWillUnmount
    * Called before destroyed
    * Canceling network request, removing events handler, Canceling subscription
    * Dont call setState

### Error Handling Phase
When there is an error during rendeing in lifecycle or in the constructor of any Children
* static getDerivedStateFromError(error)
* componentDidCatch(error,info)

```console
// Initial 
A constructor
A getDerivedStateFromProps
A render
    B constructor
    B getDerivedStateFromProps
    B render
    B componentDidMount
A componentDidMount

// Updating LifeCycle 
// After Click
A getDerivedStateFromProps
A shouldComponentUpdate
A render
    B getDerivedStateFromProps
    B shouldComponentUpdate
    B render
    B getSnapshotBeforeUpdate
A getSnapshotBeforeUpdate
```
## Error Boundary
* Error boundaries are React Componets that catch javascript error in their child component tree, log those errors, and display a fall-back UI.
* A class Component becomes an Error Boundary by defining either or both of getDerivedStateFromError and ComponentDidCatch lifeCycle Method.
* The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem
* Provide a way to gracefully handle error in application code.

```JSX
// App.jsx
<ErrorBoundaryClass>
    <HeroName name={'Superman'}/>
    <HeroName name={'Batman'}/>
    <HeroName name={'joker'}/>
</ErrorBoundaryClass>

// ErrorBoundaryClass.jsx
constructor(props){
    super(props);
    this.state = {
        hasError:false
    }
}
static getDerivedStateFromError(error){
    return {
        hasError:true
    }
}
render() {
    if(this.state.hasError){
        return <h2>Something went wrong</h2>
    }
    return this.props.children;
    }
```
## Event Bind Class
In React events take fun as argument
you can not pass reqular function direct to event for that have to bind the first.
Or you can pass whole Arrow Fn to event

```JSX
<button onClick={()=>this.btnClick()} >click</button>
OR
<button onClick={this.btnClick.bind(this)} >click</button>
<button onClick={this.btnClickArrow} >arrow click</button>
```
## Higher Order Components (HOC)
Take Component and return New Component
Reuse to common code

* Points
    * Can pass Argu to UpdateComponent
    * Always Pass {...this.props}

```JSX
const WithCounter = (WrapperComp, IncrementNumber = 1)=>{
    class NewComp extends Component {
        // Common Code
        render(){
            return <WrapperComp 
            counter={this.state.counter} 
            incrementCounter={this.incrementCounter} 
            {...this.props} 
            />
        }
    }
    return NewComp
}
export default WithCounter;
```

```JSX
// App.jsx
<div>
    <ClickCounter name="app comp" ></ClickCounter>
    <HoverCounter></HoverCounter>
    <div> App </div>
</div>
```
## Render Props
The term 'Render Props' refers to technique for `sharing code` between React Components using a `Props whose value is a Function` 

```JSX
// Counter.jsx
render() {
return <div>
    {this.props.render(this.state.counter,this.incrementCounter)}
</div>;
}

// App.jsx
<Counter render={(counter, incrementCounter) => {
    return (<ClickCounter counter={counter} incrementCounter={incrementCounter} name="Render props name "/>);
}} />
```
## Context
Context provids a way to pass data through the component tree without
having to pass props down manually at every level.

* Create Context
* Provide Context
* Consume Context

```JSX
// user Context
const UserContext = React.createContext();
const UserContext = React.createContext('Init value');
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider , UserConsumer };

// App.jsx
// If Provide not used then default value will used 'Init value'
// value="context app" will receive in nasted comp 
// Comp C `this.context` context app

<UserProvider value="context app">
    <CompB></CompB>
</UserProvider>

// Nasted Comp
<UserConsumer>
    { (name)=> <div>Comp D {name}</div> }
</UserConsumer>
```