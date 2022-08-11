import React from 'react'
function MemoComp({ name }) {
    console.log('memo')
  return (
    <div>MemoComp { name } </div>
  )
}
export default React.memo(MemoComp)