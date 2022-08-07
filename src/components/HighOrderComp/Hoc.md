# Higher Order Component
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