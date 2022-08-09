# Method as Props
    
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