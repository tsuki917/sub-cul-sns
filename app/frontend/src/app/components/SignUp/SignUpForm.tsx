import { UserContext } from "@/app/providers";
import { Button, Input } from "@nextui-org/react"
import axios, { AxiosResponse } from "axios";
import { setCookie } from "cookies-next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { useRouter } from "next/navigation";
import { useContext, useRef, useState } from "react"

export default function SignUpForm({setHasAccount}:Params){
    const [password,setPassword ]= useState<string>("");
    const [username,setUsername]= useState<string>("");
    const router = useRouter()
    const handleSubmit = ()=>{
        const url = "http://localhost:8080/api/register";
        axios.post(url,{username:username,password:password}).then((res:AxiosResponse)=>{
            const url_login = "http://localhost:8080/api/login"
            axios.post(url_login,{username:username,password:password}).then((res:AxiosResponse)=>{
                setCookie("access-token",res.data.token,{maxAge:60*60*24})
                router.push("/ThreadsPage")
            }).catch((e)=>{
                console.log(e)
            })
        }).catch((e)=>{
            console.log(e)
            
        })
    }

    return (
        <form className="flex w-1/2 mx-auto  border-2 p-12 pt-10 mt-12  flex-wrap md:flex-nowrap flex-col gap-6">
            <h2 className=" font-bold text-2xl text-center">新規登録</h2>
            <Input 
                type="username" 
                label="username" 
                placeholder="Enter your username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
                type="password" 
                label="password" 
                placeholder="Enter your password"  
                autoComplete="current-password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <div  className="flex flex-col">
                
                <Button onClick={handleSubmit} color="primary" className="mb-3">登録</Button>
                <Button onClick={()=>setHasAccount((prev:Boolean)=>!prev)}>ログインへ</Button>
            </div>
        </form>
    )
}