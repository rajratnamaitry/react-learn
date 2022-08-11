# Portal
    Using for you can control Dom root
```JSX
    // Portal.jsx
    import ReactDOM  from 'react-dom';
    export default function Portal() {
        return ReactDOM.createPortal(
            <div>Portal element demo</div>,
            document.getElementById('portal-root')
        )
    }

    // App.jsx
    <Portal/>

    // Index.html
    <div id="root"></div>
    <div id="portal-root"></div>

```