"use client";
import React from 'react'
import { useRouter} from 'next/navigation';

function page() {
    const router = useRouter();
const goToHome = () =>{
    router.push('/')}
    const goToHomePage =()=>{
        router.push('/homePage')
    }
    const goToNamePage = ()=>{
        router.push('/namePage')
    }


  return (
    <> 
    <div className="py-10 px-10">
      <h1>Welcome to Use Router page</h1>
    </div>
  <div className="py-10 px-10">
 
    <button className="btn btn-primary bg-blue-300 rounded-md" onClick={goToHome}>
      Home
    </button>
  
</div>
<div className="py-10 px-10">
  <button className="btn btn-primary bg-green-300 rounded-md" onClick={goToHomePage}>
    homePage
  </button>
  
</div>
<div className="py-10 px-10">
  <button className="btn btn-primary bg-red-300 rounded-md" onClick={goToNamePage}>
    namePage
  </button>
  
</div>







</>

  )
}

export default page
