import React, { useContext, useState } from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  User,
} from "@nextui-org/react";
import ReplyIcon from "../Icons/ReplyIcon";
import StarIcon from "../Icons/StarIcon";
import Comments from "./Commnets";
import { PostType, ThreadType, User_Post } from "@/app/types/thread.type";
import axios from "axios";
import { UserContext } from "@/app/providers";

type Props = {
  thread: {
    Post: PostType;
    User: User_Post;
    IsFavo: boolean;
  },
  id: number,
  set: React.Dispatch<React.SetStateAction<ThreadType[]>>;
};





export default function Thread(prop: Props) {
  const [isCommentOpen, changeIsCommentOpen] = useState<boolean>(false);
  const [isFavo, setIsFavo] = useState<boolean>(prop.thread.IsFavo)
  const { user } = useContext(UserContext)
  const toggleFavo = () => {
    let url = !isFavo ? "http://localhost:8080/addfavo" : "http://localhost:8080/deletefavo";
    let isFirst = true;
    axios.post(url, { PostId: prop.thread.Post.ID, UserId: user?.id }).then(() => {
      console.log("success")
      prop.set((pre) => {
        const diff = !isFavo ? 1 : -1;
        const newData = [...pre];
        if (isFirst) {
          newData[prop.id].Post.favonum = prop.thread.Post.favonum + diff
          isFirst = false;
        }
        return newData;
      })

    }).catch((e) => {
      console.log(e)
    })
  }


  return (
    <div className="">
      <Card className="border-1   border-black z-0">
        <CardHeader className="z-0">
          <User
            name={prop.thread.User.username}
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}

          />
        </CardHeader>
        <CardBody className="text-2m">{prop.thread.Post.content}</CardBody>
        <CardFooter>
          <div className="flex justify-start  w-full relative">
            <ReplyIcon />
            <StarIcon isFavo={isFavo} setIsFavo={setIsFavo} onClick={toggleFavo} favonum={prop.thread.Post.favonum} />
            <p className="text-m absolute bottom-0 right-0 ">
              {prop.thread.Post.CreatedAt.split("T")[0] + " " + prop.thread.Post.CreatedAt.split("T")[1].split(".")[0]}
            </p>
          </div>
        </CardFooter>
        {/* {prop.thread.Post.Comments !== null && (
          <Comments comment={prop.thread.Post.Comments} />
        )} */}
      </Card>
    </div>
  );
}
