import React, { useEffect } from 'react'

export default function Home() {

  // useEffect(()=>{
  //   fetchData();
  // },[])

  // const fetchData = ()=>{
  //   fetch("https://dummyjson.com/products",{
  //     method : "POST",
  //     body : JSON.stringify,
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res)=>res.json())
  //     .then((data)=>{
  //       console.log(data)
  //     })
  //     .catch((err)=>console.log("Something is Wrong",err))
  // }

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
