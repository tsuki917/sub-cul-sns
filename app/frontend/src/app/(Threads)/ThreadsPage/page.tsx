"use client";
import Title from "@/app/components/Title";
import { Divider } from "@nextui-org/react";
import Menu from "@/app/components/SideMenuCom/Menu";
import Threads from "@/app/components/ThreadsCom/Threads";
import { useState } from "react";
import AddPost from "@/app/components/ThreadsCom/AddPost";
export default function ThreadsPage() {
  const [isPost, setIsPost] = useState<boolean>(false);

  return (
    <div className="hidden-scrollbar">
      <Title />
      <Divider />
      <div className=" relative flex flex-row">
        <Menu />
        <div className="w-3/4" style={{ marginLeft: "25%" }}>
          {isPost ? (
            <AddPost set={setIsPost} />
          ) : (
            <Threads set={setIsPost} />
          )}
        </div>
      </div>
    </div>
  );
}
