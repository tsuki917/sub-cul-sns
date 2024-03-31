import { Button, Input } from "@nextui-org/react";
import axios, { AxiosResponse } from "axios";
import { ThreadType } from "@/app/types/thread.type";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import plusIcon from "../../../img/plus.png"
import Thread from "./Thread";
import { UserContext } from "@/app/providers";
import PlusIcon from "../Icons/PlusIco";
import Link from "next/link";
export default function Threads({ set }: { set: Dispatch<SetStateAction<boolean>> }) {
  const [content, setContent] = useState<string>("");
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (threads.length == 0) {
      console.log("user")
      console.log(user?.id)
      axios
        .get(`http://localhost:8080/getallpost?userid=${user?.id}`)
        .then((res: AxiosResponse) => {
          console.log(res.data)
          setThreads(res.data.threads.reverse());
        }).catch((e) => {
          console.log(e)
        })
    }
  }, []);

  const onAddPost = (event: FormEvent<HTMLFormElement>) => {
    console.log("user")
    event.preventDefault();
    console.log(user)
    let url = "http://localhost:8080/createpost";
    axios.post(url, { Content: content, Userid: user?.id }).then((res: AxiosResponse) => {
      console.log(res)
      setContent("")
    }).catch((e) => {
      console.log(e)
    })
    // setContent("");
    // setName("");
  };

  return (
    <div className="pt-3 pb-5 pr-3 pl-3 relative ">
      <div>
        {threads?.map((thread, key) => {
          return (
            <div className="border-1 mb-1" key={key}>
              <Thread thread={thread} id={key} set={setThreads} />
            </div>
          );
        })}
      </div>
      <div className="fixed top-96 right-3">
        <PlusIcon onClick={() => set((prev) => !prev)} />
      </div>

    </div>
  );
}
