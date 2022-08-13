import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from './userStore'
import UserList from './UserList'
export default function UserView() {
    const user = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    }, [])
  return (
    <div>
        User View 
        { user.loading ? '...loading' : <UserList list={user.list} /> }
    </div>
  )
}
