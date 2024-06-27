"use client";
import Title from "@/components/Title";
import { Divider } from "@nextui-org/react";
import Menu from "@/components/SideMenuCom/Menu";
import Threads from "@/components/ThreadsCom/Threads";
import { useState } from "react";
import AddPost from "@/components/ThreadsCom/AddPost";
export default function ThreadsPage() {
  const [isPost, setIsPost] = useState<boolean>(false);

  return (
    <div className="hidden-scrollbar">

      {isPost ? (
        <AddPost set={setIsPost} />
      ) : (
        <Threads set={setIsPost} />
      )}
    </div>
  );
}
