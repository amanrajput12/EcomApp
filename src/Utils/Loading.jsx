import React from 'react'
import  {  List  } from 'react-content-loader'
const Loading = () => {
    
    const MyCodeLoader = () =>  <List/> 
  return (
    <div>
      <MyCodeLoader/>
      <MyCodeLoader/>
      <MyCodeLoader/>
      <MyCodeLoader/>
      <MyCodeLoader/>
    </div>
  )
}

export default Loading
