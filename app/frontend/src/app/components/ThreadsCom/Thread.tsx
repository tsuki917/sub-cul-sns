import React, { useState } from "react";
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
import { postType } from "@/app/types/thread.type";

type Props = {
  post: postType;
};

export default function Post(prop: Props) {
  const [isCommentOpen, changeIsCommentOpen] = useState<boolean>(false);
  return (
    <div className="p-4">
      <Card className="border-1   border-black">
        <CardHeader>
          <User
            name={prop.post.Author}
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </CardHeader>
        <CardBody className="text-2m">{prop.post.Content}</CardBody>
        <CardFooter>
          <div className="flex justify-start  w-full relative">
            <ReplyIcon />
            <StarIcon />
            <p className="text-m absolute bottom-0 right-0 ">
              {prop.post.CreatedAt.split("T")[0]+" "+prop.post.CreatedAt.split("T")[1].split(".")[0]}
            </p>
          </div>
        </CardFooter>
        {prop.post.Comments !== null && (
          <Comments comment={prop.post.Comments} />
        )}
      </Card>
    </div>
  );
}
