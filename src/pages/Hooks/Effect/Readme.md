   # useEffect
   * The Effect Hook lets you perform side effects in functional components
   * It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount

      1. Render every times
      2. Render conditions
      3. Render once
      4. UnMount component

   1. Every time render useEffect executed
   ```JSX
   // useEffect.jsx 
   useEffect(() => {
    console.log("useEffect");
    document.title = "Count " + count;
   });
   // Every time render console.log prints
   ```

   2. Conditional Run Effect and 2nd argu
   ```JSX
   // useEffectConditional.jsx
   useEffect(() => {
      console.log("useEffect");
      document.title = "Count " + count;
   },[count]);
   // if count change then  console.log prints
   ```

   3. Render Once 
   ```JSX
   // useEffectOnce.jsx
   const logMouse = (e)=>{
      console.log('logMouse fn')
      setX(e.clientX)
      setY(e.clientY)
   }
   useEffect(()=>{
      console.log('useEffect fn');
      document.addEventListener('mousemove',logMouse)
   },[])
   // Ex. Fetch Data on id change 
   // Output
   // useEffect fn
   // (207) logMouse fn
   ```

   4. UnMount component
   ```JSX
   // useEffectCleanUp.jsx
   useEffect(()=>{
      console.log('useEffect fn');
      document.addEventListener('mousemove',logMouse)
      return ()=>{
         console.log('useEffect unmount')
         document.removeEventListener('mousemove',logMouse);
      }
   },[])
   // Output
   // useEffect unmount 
   ```