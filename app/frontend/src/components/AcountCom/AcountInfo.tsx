import React, { useState } from "react";
import { Button, Image, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import PreviousMap from "postcss/lib/previous-map";
import AccountPosts from "./AccountPosts";

export default function AcountInfo() {
  const [AccountTestData, setAccountTestData] = useState({
    name: "tester1",
    icon: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    profileText: "よろしくお願いします",
  });

  const test = () => {
    console.log(AccountTestData);
  };

  return (
    <div className="m-4">
      <div className="border-1 border-black mb-4">
        <div className="  flex justify-start w-1/2 border-1 border-black text-3xl">
          <Image
            width={100}
            height={100}
            src={AccountTestData.icon}
            alt={AccountTestData.name + "アイコン画像"}
          />
          <div className="flex justify-center flex-col mx-auto">
            <Input
              type="name"
              label="name"
              size="lg"
              value={AccountTestData.name}
            />
          </div>
        </div>
      </div>
      <div className="  border-1  border-black">
        <Textarea
          label="プロフィール"
          labelPlacement="outside"
          placeholder="Enter your description"
          defaultValue={AccountTestData.profileText}
          className=" w-3/4"
          value={AccountTestData.profileText}
          onChange={(e) =>
            setAccountTestData((prev) => ({
              ...prev,
              profileText: e.target.value,
            }))
          }
        />
        <Button onClick={test}>変更</Button>
      </div>
      <div>
        <h1 className="text-3xl my-4">過去の投稿</h1>
        <AccountPosts />
      </div>
    </div>
  );
}
