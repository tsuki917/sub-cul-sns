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
        進捗ゼロ!GOの勉強中+設計から頑張ってみようと考えてます。
      </CardBody>
      <CardFooter>
        <div className="flex justify-around border-1 w-full border-black">
          <ReplyIcon />
          {/* <StarIcon /> */}
        </div>
      </CardFooter>
    </Card>
  );
}
