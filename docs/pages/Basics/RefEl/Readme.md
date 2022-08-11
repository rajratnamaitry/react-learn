# Refs input
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
# Ref Component 
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

# Forward Ref Component
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