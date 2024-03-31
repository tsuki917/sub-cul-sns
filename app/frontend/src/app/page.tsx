"use client";
import React, { useEffect, useState } from "react";
import LoginForm from "@/app/components/login/Login";
import { hasCookie} from "cookies-next";
import SignUpForm from "./components/SignUp/SignUpForm";
import { useRouter } from "next/navigation";


export default function Home() {

  const [hasAccount,setHasAccount] = useState<boolean>(true);
  const router = useRouter();
  useEffect(()=>{
    // if(hasCookie("access-token")){
    //   router.push("/ThreadsPage")
    // }
  },[]);

  return (
    <div>
        {hasAccount?(
          <>
            <LoginForm setHasAccount={setHasAccount}/>
          </>
        ):(
          <>
            <SignUpForm  setHasAccount={setHasAccount}/>
          </>
        )}
    </div>
  );
}
