"use client";
import React, { useContext, useEffect, useState } from "react";
import LoginForm from "@/components/login/Login";
import { getCookie, hasCookie } from "cookies-next";
import SignUpForm from "../components/SignUp/SignUpForm";
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import { UserContext } from "./providers";


export default function Home() {

  const [hasAccount, setHasAccount] = useState<boolean>(true);
  const router = useRouter();
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    if (hasCookie("access-token")) {
      const token: string | undefined = getCookie("access-token")
      const url = "http://localhost:8080/api/admin/user"
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((res: AxiosResponse) => {
        console.log(res.data.data)
        if (setUser !== undefined) {
          setUser({
            id: res.data.data.ID,
            name: res.data.data.username,
            tag: res.data.data.usertag,
            img_url: res.data.data.img_path
          })
        }
        router.push("/ThreadsPage")
      }).catch((err) => {
        console.log(err)
      })
    }
  }, []);

  return (
    <div>
      {hasAccount ? (
        <>
          <LoginForm setHasAccount={setHasAccount} />
        </>
      ) : (
        <>
          <SignUpForm setHasAccount={setHasAccount} />
        </>
      )}
    </div>
  );
}
