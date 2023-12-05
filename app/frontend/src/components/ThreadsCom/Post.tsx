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
export default function Post() {
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
        <div className="flex justify-around border-1 w-full border-black">
          <ReplyIcon />
          <StarIcon />
        </div>
      </CardFooter>
    </Card>
  );
}
