import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  User,
} from "@nextui-org/react";
import StarIcon from "../Icons/StarIcon";
import ReplyIcon from "../Icons/ReplyIcon";
export default function AccountPosts() {
  return (
    <Card className="border-1 border-black">
      <CardHeader>
        <User
          name="Jane Doe"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </CardHeader>
      <CardBody className="text-xl">
        何をやってるんだか何もわかりません。私はどうすればいいんでしょうか？あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </CardBody>
      <CardFooter>
        <ReplyIcon />
        <StarIcon />
      </CardFooter>
    </Card>
  );
}
