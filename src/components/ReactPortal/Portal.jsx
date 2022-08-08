import React from 'react'
import ReactDOM  from 'react-dom';
export default function Portal() {
  return ReactDOM.createPortal(
    <div>Portal element demo</div>,
    document.getElementById('portal-root')
  )
}
