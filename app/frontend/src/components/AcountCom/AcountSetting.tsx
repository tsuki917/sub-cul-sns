
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Image, Input, User } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import AccountThreads from "./AccountThreads";
import { UserContext } from "@/app/providers";
import axios, { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { UserType } from "@/types/user.type";
import { useRouter, useSearchParams } from "next/navigation";


export default function AcountInfo() {
  const { user, setUser } = useContext(UserContext);
  const [accountDisplay, setAccountDisplay] = useState<UserType>();
  const [username, setUsername] = useState<string>();
  const [usertag, setUsertag] = useState<string>();
  const [userprof, setUserProf] = useState<string>();
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [newIconURL, setNewIconURL] = useState<string>();
  const [newIconFile, setNewIconFile] = useState<File>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const router = useRouter()
  const search = useSearchParams()
  useEffect(() => {
    let myuserID = user?.id
    if (user == undefined) {

      const token = getCookie("access-token")
      const url = "http://localhost:8080/api/admin/user"
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((res: AxiosResponse) => {

        if (setUser !== undefined) {
          setUser(res.data.data)
        }
      })
    }
  }, [])

  useEffect(() => {
    let myuserID = user?.id
    if (myuserID !== search.get("userid")) {
      console.log("other")
      const url = "http://localhost:8080/user?id=" + search.get("userid")
      console.log(url)
      axios.get(url).then((res: AxiosResponse) => {
        console.log(res.data)
        const UserData = {
          id: res.data.user.ID,
          name: res.data.user.username,
          tag: res.data.user.usertag,
          img_url: res.data.user.img_path,
          profile: res.data.user.profile
        }
        setAccountDisplay(() => UserData)
        setUsername(() => UserData.name)
        setUsertag(() => UserData.tag)
        setUserProf(() => UserData.profile)
      }).catch((e) => {
        console.log(e)
      })
      // console.log(UserData)

    } else {
      setAccountDisplay(() => user)
      setUsername(() => user.name)
      setUsertag(() => user.tag)
      setUserProf(() => user.profile)
    }
  }, [user])
  const editProfile = () => {
    const url = "http://localhost:8080/updateuser"
    const form = new FormData();
    if (username !== undefined && usertag !== undefined && userprof !== undefined && accountDisplay?.id !== undefined) {
      form.append("Name", username)
      form.append("Tag", usertag)
      form.append("User_id", user.ID.toString())
      form.append("Prof", userprof)
      form.append("IsChangeFile", newIconURL === undefined ? "False" : "True")
    }
    if (newIconFile !== undefined) {
      form.append("image", newIconFile)
    }
    form.forEach(element => {
      console.log(element)
    });
    axios.post(url, form).then((res: AxiosResponse) => {
      setIsEditing(prev => !prev)
      router.push("/ThreadsPage")
      const token = getCookie("access-token")
      const url = "http://localhost:8080/api/admin/user"
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((res: AxiosResponse) => {
        console.log(res.data.data)
        if (setUser !== undefined) {
          setUser(res.data.data)
        }
        const u: UserType = {
          id: res.data.data.ID,
          name: res.data.data.username,
          tag: res.data.data.usertag,
          img_url: res.data.data.img_path,
          profile: res.data.data.profile
        }
        setUsername(() => u.name)
        setUsertag(() => u.tag)
        setUserProf(() => u.profile)
        setAccountDisplay(() => u)
      })
    })
  };

  const cancelEdit = () => {
    setNewIconFile(undefined)
    setNewIconURL(undefined)
    setIsEditing(prev => !prev)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      const objectURL = URL.createObjectURL(targetFile);
      setNewIconURL(objectURL)
      setNewIconFile(targetFile);
    }

  }

  return (
    <div className="m-4">
      {
        accountDisplay ? (
          <div className="border-b-2 p-4">

            <div className="mb-4 flex justify-start gap-4">
              {!isEditing && <User
                name={accountDisplay.name}
                description={"@" + accountDisplay.tag}
                avatarProps={{
                  src: accountDisplay.img_url
                }}
              />}
              {/* <div className="flex justify-start items-center gap-4">
            <Image
              width={90}
              height={90}
              src={accountDisplay ? accountDisplay.img_url : ""}
              alt={accountDisplay ? accountDisplay.name : "" + "アイコン画像"}
            />
            <div className="flex justify-center flex-col ">
              {isEditing ? (
                <Input
                  type="name"
                  label="name"
                  size="lg"

                  value={accountDisplay ? accountDisplay.name : ""}
                />) : (
                <h3 className=" font-bold">{accountDisplay ? accountDisplay.name : ""}</h3>
              )}
            </div>

          </div> */}
              <div className="flex items-center">
                {isEditing ? (
                  <div className="flex gap-2">
                    <Button onClick={() => editProfile()}>編集完了</Button>
                    <Button onClick={() => cancelEdit()}>キャンセル</Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsEditing(prev => !prev)}>プロフィール編集</Button>
                )}
              </div>
            </div>
            <div >
              {isEditing ? (
                <div>
                  <div className="flex flex-row gap-5">
                    <Input id="file" type="file" ref={fileRef} onChange={(e) => handleChange(e)} className="hidden" />
                    <button onClick={() => fileRef.current?.click()}>
                      <User
                        name={""}
                        avatarProps={{
                          src: newIconURL ? newIconURL : accountDisplay.img_url,
                          size: "lg"

                        }}
                      />
                    </button>
                    <div className="flex flex-col">
                      <Input
                        type="name"
                        label="name"
                        size="sm"
                        className="w-full mt-2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <Input
                        type="tag"
                        label="tag"
                        size="sm"
                        className="w-full mt-2"
                        onChange={(e) => setUsertag(e.target.value)}
                        value={usertag}
                      />

                    </div>

                  </div>
                  <Textarea
                    label="profile"
                    placeholder="Enter your description"
                    onChange={(e) => setUserProf(e.target.value)}
                    className=" w-3/4 mt-2"
                    value={userprof}

                  />
                </div>
              ) : (
                <h4>{accountDisplay.profile}</h4>
              )}

            </div >
          </div>
        ) : (

          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>

        )
      }

      <div className="mt-3">
        <AccountThreads />
      </div>
    </div>
  );
}
