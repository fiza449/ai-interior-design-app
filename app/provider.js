"use client"
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from './_context/userDetailContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Provider({children}) {
	
	const {user} = useUser();
	const [userDetail, setUserDetail] = useState([]);
	useEffect(() => {
		user && VerifyUser();
	},[user])
	
  /**Verify User */	
	const VerifyUser = async() =>{
		try{
		const dataResult = await axios.post('/api/verify-user',{
			user:user
		});
		setUserDetail(dataResult.data.result);
	} catch(err){
		console.error("VerifyUser error: ", err)
	}
  } 
	return (
		<UserDetailContext.Provider value={{userDetail, setUserDetail}}>
		<div>
		{children}
		</div>
		</UserDetailContext.Provider>
  )
}

export default Provider
