# Life Cycle
## Initial Load
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

## Updating LifeCycle
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

## Unmounting Phase
* componentWillUnmount
    * Called before destroyed
    * Canceling network request, removing events handler, Canceling subscription
    * Dont call setState

## Error Handling Phase
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
