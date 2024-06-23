import { useEffect, useRef, useState } from "react"
import fetchData from "../Utils/fetch"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
 console.log("cookies",Cookies.get('token'));
  const [login,setLogin]= useState(true)
  const email = useRef(null)
  const password = useRef(null)
  const userName = useRef(null)
  // useEffect(()=>{
  //   const token = Cookies.get('token');
  //   console.log('Token from cookie:', token);
  //   if(token){
  //     navigate('Ecom/home')
  //   }
  // },[])
  const handleFormSubmit = async(e)=>{
    e.preventDefault()
    if(login){
      const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.current.value,
            password:password.current.value
        }),
    credentials: 'include'
        
    };
    console.log("email",email.current.value,password.current.value);
    await  fetchData(`https://mern-ecomapp-1.onrender.com/v1/user/login`,options).then((data)=>{
      if(data.dataproduct.sucess){
        navigate('Ecom/home')
      }
    })
    }


    if(!login){
      const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.current.value,
            password:password.current.value,
            userName:userName.current.value
        }),
    credentials: 'include'
    };
    console.log("email",email.current.value,password.current.value);
    await  fetchData(`https://mern-ecomapp-1.onrender.com/v1/user/singup`,options).then((data)=>{
      console.log("on user signup",data)
    })
    }
    
    
  }
    return (
      <>
     
        <div className="flex min-h-full bg-[#0f172a] h-screen text-white flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10  text-white text-center text-2xl font-bold leading-9 tracking-tight ">
             {login ? 'Log in to your account': 'Create a New Account'}
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleFormSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  ref={email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

         {!login &&     <div>
                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-white">
                  userName
                </label>
                <div className="mt-2">
                  <input
                  ref={userName}
                    id="userName"
                    name="userName"
                    type="text"
                    autoComplete="userName"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
}
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                  <div className="text-sm">
                    <button href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                  ref={password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p  onClick={()=>setLogin(!login)} className="mt-10 text-center text-sm text-gray-500">
              {login? ' Not a member?': "Already a member"}
              <span  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             {login? "Create an Account" : "Login"} 
              </span>
            </p>
          </div>
        </div>
      </>
    )
  }