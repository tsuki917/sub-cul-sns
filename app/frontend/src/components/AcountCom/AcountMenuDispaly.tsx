import React, { useContext, useEffect, useState } from "react";
import { Link, User } from "@nextui-org/react";
import { UserContext } from "@/app/providers";
import { UserType } from "@/types/user.type";
import axios, { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
export default function AcountMenuDisplay() {
  const { user } = useContext(UserContext);
  const [account, setAccount] = useState<UserType>();
  useEffect(() => {
    console.log(user)
    if (user == undefined) {
      const token = getCookie("access-token")
      const url = "http://localhost:8080/api/admin/user"
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((res: AxiosResponse) => {
        console.log(res.data.data)
        const u: UserType = {
          id: res.data.data.ID,
          name: res.data.data.username,
          tag: res.data.data.usertag,
          img_url: res.data.data.img_path,
          profile: res.data.data.profile

        }
        setAccount(() => u)
      })
    } else {
      console.log(user)
      const u: UserType = {
        id: user.id,
        name: user.name,
        tag: user.tag,
        img_url: user.img_url,
        profile: user.profile

      }
      console.log(u)
      setAccount(() => u)
    }
    console.log(account)
  }, [])

  useEffect(() => {
    const token = getCookie("access-token")
    const url = "http://localhost:8080/api/admin/user"
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res: AxiosResponse) => {
      console.log(res.data)
      const u: UserType = {
        id: res.data.data.ID,
        name: res.data.data.username,
        tag: res.data.data.usertag,
        img_url: res.data.data.img_path,
        profile: res.data.data.profile
      }
      setAccount(u)
    })
  }, [user])
  return (
    <div
      className="bg-white  rounded-2xl w-1/4
    
    fixed bottom-2 border-1 border-gray-color"
    >
      {account && <Link href={`/AcountInfoPage?userid=${account.id}`} rel="preload">
        <User
          className="  bg-white m-2 p-2 text-left"
          name={account?.name}
          description={"@" + account?.tag}
          avatarProps={{
            src: account?.img_url,
            size: "sm",
          }}
        />
      </Link>}
    </div>
  );
}
