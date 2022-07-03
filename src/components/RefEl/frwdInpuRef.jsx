import React from 'react'
const FrwdInpuRef = React.forwardRef((props,ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default FrwdInpuRef