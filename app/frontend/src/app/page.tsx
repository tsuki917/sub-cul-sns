"use client";
import React, { useState } from "react";

import Menu from "./components/SideMenuCom/Menu";
import Title from "./components/Title";
import { Button} from "@nextui-org/react";
import Threads from "./components/ThreadsCom/Posts";
import LoginForm from "@/app/components/login/Login";
export default function Home() {
  

  const [isLogin,setIsLogin] = useState<boolean>(false);
  return (
    <div>
      {
        isLogin?(
          <div>
            <Title />
      <div className=" relative flex flex-row">
        <Menu />
        <div className="w-3/4 " style={{ marginLeft: "25%" }}>
          <Threads />
        </div>
      </div>
          </div>
        ):(
          <div>
            <LoginForm/>
            <Button onClick={()=>setIsLogin((pre)=>!pre)}>ログイン</Button>
          </div>
        )
      }
      
    </div>
  );
}
