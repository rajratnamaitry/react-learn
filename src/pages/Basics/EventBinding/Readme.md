# Event Binding
   In React events take fun as argument
   you can not pass reqular function direct to event for that have to bind the first.
   Or you can pass whole Arrow Fn to event

```JSX
    <button onClick={()=>this.btnClick()} >click</button>
    OR
    <button onClick={this.btnClick.bind(this)} >click</button>
    <button onClick={this.btnClickArrow} >arrow click</button>
```