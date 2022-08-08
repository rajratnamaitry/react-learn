/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function ChildMethodAsProps(props) {
  return (
    <button onClick={()=>props.getParentHandler('child2')} >Child button</button>
  )
}
