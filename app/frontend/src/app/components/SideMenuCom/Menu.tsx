"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
export default function Menu() {
  return (
    <div className="w-1/4 flex flex-col fixed h-full bg-gray-200 border-r-1  text-lg">
      <Button className="w-full  rounded-none bg-gray-200  ">test</Button>
      <Divider />
      <Button className="w-full  rounded-none bg-gray-200  ">test</Button>
      <Divider />
      <Button className="w-full rounded-none bg-gray-200  ">test</Button>
      <Divider />
    </div>
  );
}
