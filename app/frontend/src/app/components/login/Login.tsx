import { Button, Input } from "@nextui-org/react"
import axios, { AxiosResponse } from "axios";
import { setCookie } from "cookies-next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { useRef, useState } from "react"

export default function LoginForm({setIsLogin}:Params){
    const [email,setEmail] = useState<string>("");
    const [password,setPassword ]= useState<string>("");

    const handleSubmit = ()=>{
        let url = "http://localhost:8080/api/login";
        axios.post(url,{email:email,password:password}).then((res:AxiosResponse)=>{
            setCookie("access-token",res.data.token,{maxAge:60*60*24})
            setIsLogin(true)
        }).catch((e)=>{
            console.log(e)
        })
    }

    return (
        <form className="flex w-1/2 mx-auto  border-2 p-12 pt-10 mt-12  flex-wrap md:flex-nowrap flex-col gap-10">
            <h2 className=" font-bold text-2xl text-center">ログイン</h2>
            <Input type="email" label="Email" placeholder="Enter your email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" label="password" placeholder="Enter your password"  autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleSubmit} color="primary">ログイン</Button>
        </form>
    )
}