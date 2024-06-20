import { Button, Input } from "@nextui-org/react";
import axios, { AxiosResponse } from "axios";
import { ThreadType } from "@/types/thread.type";
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
import Thread from "../ThreadsCom/Thread";
import { UserContext } from "@/app/providers";
import PlusIcon from "../Icons/PlusIco";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import CancelIcon from "../Icons/CancelIcon";
export default function AccountThreads() {
  const [threads, setThreads] = useState<ThreadType[]>([]);
  const { user } = useContext(UserContext);
  const [pickUPURL, setPickUPURL] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (threads.length == 0) {
      console.log("user")
      console.log(user?.ID)
      axios
        .get(`http://localhost:8080/getallmypost?userid=${user?.ID}`)
        .then((res: AxiosResponse) => {
          console.log(res.data)
          setThreads(res.data.threads.reverse());
        }).catch((e) => {
          console.log(e)
        })
    }
  }, []);

  useEffect(() => {
    console.log("user")
    console.log(user)
    if (user?.ID) {
      axios
        .get(`http://localhost:8080/getallmypost?userid=${user?.id}`)
        .then((res: AxiosResponse) => {
          console.log(res.data)
          setThreads(res.data.threads.reverse());
        }).catch((e) => {
          console.log(e)
        })

    }
  }, [user])


  return (
    <div className="pt-3 pb-5 pr-3 pl-3 relative ">
      {pickUPURL && (
        <div className="fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center bg-opacity-40 bg-black ">
          <div className=" max-w-max w-1/2 ">
            <CancelIcon onClick={() => setPickUPURL(undefined)} />
            <Image src={pickUPURL} alt="test" width={"w-full"} />
          </div>
        </div>
      )}
      <div>
        {threads?.map((thread, key) => {
          return (
            <div className="border-1 mb-1" key={key}>
              <Thread thread={thread} id={key} set={setThreads} pick={setPickUPURL} />

            </div>
          );
        })}
      </div>
      {/* <div className="fixed top-96 right-3">
        <PlusIcon onClick={() => set((prev) => !prev)} />
      </div> */}

    </div>
  );
}