import React,{useState,useEffect} from 'react';
import LoginSignupError from "../components/login/loginerror";
import TypeSelector from "../components/login/typeselector";
import { useRouter } from "next/router";

export default function Login() {

  const [errorMsg,setErrorMsg] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [type, setType] = useState("philan");


  const router = useRouter()

  function tryLogin(){
    setErrorMsg("getting your details...")

    const reqOptions = {
      method:"POST",
      headers:{"Content-Type":"application/json",
      "Accept":"application/json"},
      body:JSON.stringify({email,password})
    }

    fetch(`/api/${type}/login`,reqOptions)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setErrorMsg(data.msg)
      if(data.status==='ok'){
        localStorage.setItem('usertoken',data.user)
        router.push("/")
      }
    })
  }


  useEffect(()=>{
    if(localStorage.getItem('usertoken')){
      router.push("/")
    }
  },[])

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div className='flex flex-col max-w-[400px] w-[90%] gap-6'>
        <p className='text-3xl font-bold'>Welcome Back!!</p>
        <p className='text-3xl font-bold'>Login</p>
        <TypeSelector setType={setType} />
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button style={{width:"100%"}} onClick={tryLogin}>Login</button>
        <LoginSignupError errorMsg={errorMsg}/>
      </div>
    </div>
  )
}
