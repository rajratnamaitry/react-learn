# Error Boundary
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
