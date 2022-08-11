# Context
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