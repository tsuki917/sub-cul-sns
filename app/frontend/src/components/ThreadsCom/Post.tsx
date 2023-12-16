import React from "react";
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

type postType = {
  Author: string;
  Content: string;
  Comments: commentType[];
};
type commentType = {
  Author: string;
  Content: string;
};
type Props = {
  post: postType;
};

export default function Post(prop: Props) {
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
        <CardBody className="text-xl">{prop.post.Content}</CardBody>
        <CardFooter>
          <div className="flex justify-start  w-full ">
            <ReplyIcon />
            <StarIcon />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
