import React from 'react'
import { app , database } from '../firebase';
import { getDocs,collection, addDoc } from 'firebase/firestore'
export default function TableData() {
    const collectionRef = collection(database,'users');
    const handleSubmit = async () => {
        // addDoc(collectionRef,{
        //     email:"rajratna@gmail.com",
        //     pass:"!23123"
        // }).then(console.log)
        const data = await getDocs(collectionRef)
        console.log(data.docs.map(e=>{
            return {...e.data(),id:e.id};
        }))
    }
  return (
    <button onClick={()=>handleSubmit()}>Table</button>
  )
}
