import { Button, Input } from "@nextui-org/react"
import axios, { AxiosResponse } from "axios";
import { setCookie } from "cookies-next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { useContext, useState } from "react"
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/providers";


export default function LoginForm({ setHasAccount }: Params) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const { setUser } = useContext(UserContext)
  const handleSubmit = () => {
    let url = "http://localhost:8080/api/login";
    axios.post(url, { username: username, password: password }).then((res: AxiosResponse) => {
      setCookie("access-token", res.data.token, { maxAge: 60 * 60 * 24 })
      const url = "http://localhost:8080/api/admin/user"
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
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
      })
      router.push("/ThreadsPage")

    }).catch((e) => {
      console.log(e)
      setError(true)
    })
  }

  return (
    <form className="flex w-1/2 mx-auto  border-2 p-12 pt-10 mt-12  flex-wrap md:flex-nowrap flex-col gap-6">
      <h2 className=" font-bold text-2xl text-center">ログイン</h2>
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
      <div className="flex flex-col">
        {error &&
          <span className="text-xs text-red-500 mb-1">またはパスワードが間違っています</span>
        }
        <Button onClick={handleSubmit} color="primary" className="mb-3">ログイン</Button>
        <Button onClick={() => setHasAccount((prev: Boolean) => !prev)}>新規アカウント</Button>
      </div>
    </form>
  )
}