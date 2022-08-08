# Pure component 
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

# Shallow comparison
* Primitive Types 'string' == 'string' return true;
* Complex Types  if a and b reference the exact same Object.

# Memo v16 feature
    Similar to Pure component
```jsx
    export default React.memo(MemoComp)
```