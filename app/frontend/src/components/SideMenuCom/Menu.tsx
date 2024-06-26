"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Divider, Link } from "@nextui-org/react";
import AcountMenuDisplay from "../AcountCom/AcountMenuDispaly";

export default function Menu() {


  return (
    <div className="w-1/4 flex flex-col fixed h-full bg-gray-200 border-r-1 border-gray-color text-lg ">
      <Button as={Link} href="/ThreadsPage" className="w-full  rounded-none bg-gray-200" >Threads</Button>
      <Divider />
      <Button className="w-full  rounded-none bg-gray-200  ">test</Button>
      <Divider />
      <Button className="w-full rounded-none bg-gray-200  ">test</Button>
      <Divider />
      <AcountMenuDisplay />
    </div>
  );
}
