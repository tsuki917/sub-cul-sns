"use client";
import Title from "@/app/components/Title";
import { Divider } from "@nextui-org/react";
import Menu from "@/app/components/SideMenuCom/Menu";
import Threads from "@/app/components/ThreadsCom/Threads";
export default function ThreadsPage() {
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
