"use client";
import React from "react";

import Menu from "../components/SideMenuCom/Menu";
import Title from "../components/Title";
import { Divider } from "@nextui-org/react";
import Threads from "../components/ThreadsCom/Posts";
export default function Home() {
  return (
    <div>
      <Title />
      <Divider className="mt-2" />
      <div className=" relative flex flex-row">
        <Menu />
        <div className="w-3/4 " style={{ marginLeft: "25%" }}>
          <Threads />
        </div>
      </div>
    </div>
  );
}
