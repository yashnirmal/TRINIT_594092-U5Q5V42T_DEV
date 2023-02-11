import React,{useState,useEffect} from 'react';
import LoginSignupError from "../components/login/loginerror";
import TypeSelector from "../components/login/typeselector";
import { useRouter } from "next/router";


export default function Signup() {

  const [errorMsg,setErrorMsg] = useState("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [type, setType] = useState("philan");
  const router = useRouter()

  function checkPasswordValidity(){
    // check password 
    if(password.length<8 & password.length>12){
      setErrorMsg("Password length should atleast be 8 and atmost 12")
      return false
    }

    if(password!==confirmpass){
      setErrorMsg("Password and confirmed password should be same")
      return false
    }

    return true
  }


  function trySignup(){
    if(!checkPasswordValidity()){
      return
    }

    setErrorMsg("trying make a new account for you...");


    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,name,image,password
      }),
    };

    fetch(`/api/${type}/signup`, reqOptions)
      .then((res) => res.json())
      .then((data) => {
        setErrorMsg(data.msg);
        console.log(data)
        if(data.status='ok'){
          localStorage.setItem('usertoken',data.user);
          router.push("/")
        }
      });
  }

  function convertTobase64(file){
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload=()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror=(err)=>{
        reject(err)
      }
    })
  }

  async function handleImageChange(e){
    const file = e.target.files[0]
    const base64 = await convertTobase64(file)
    setImage(base64)
  }

  useEffect(() => {
    if (localStorage.getItem("usertoken")) {
      router.push("/");
    }
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div className='flex flex-col max-w-[400px] w-[90%] gap-6'>
        <p  className='text-3xl font-bold'>Lets get you a new account</p>
        <p className='text-3xl font-bold'>SignUp</p>
        <TypeSelector setType={setType} />
        <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="password" placeholder='Confirm password' value={confirmpass}  onChange={(e)=>setConfirmpass(e.target.value)}/>
        <input type="file"  accept='.jpeg, .png, .jpg' onChange={handleImageChange} />
        <button style={{ width: "100%" }} onClick={trySignup}>Signup</button>
        <LoginSignupError errorMsg={errorMsg} />
      </div>
    </div>
  );
}
