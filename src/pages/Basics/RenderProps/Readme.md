# Render Props
    The term 'Render Props' refers to technique for `sharing code` between React Components using a `Props whose value is a Function` 

```JSX
   // Counter.jsx
  render() {
    return <div>
        {this.props.render(this.state.counter,this.incrementCounter)}
    </div>;
  }
```
```JSX
    // App.jsx
    <Counter render={(counter, incrementCounter) => {
        return (<ClickCounter counter={counter} incrementCounter={incrementCounter} name="Render props name "/>);
    }} />
```