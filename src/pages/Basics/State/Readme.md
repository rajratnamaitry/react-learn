# Class State
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