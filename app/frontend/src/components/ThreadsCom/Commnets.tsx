import React, { useState } from "react";
import axios from "axios";
import { commentType } from "@/types/thread.type";
import CommentMap from "./CommentMap";
import { Button } from "@nextui-org/react";
type Props = {
  comment: commentType[];
};
export default function Comments(prop: Props) {
  const [isOpen, changeIsOpen] = useState<boolean>(false);
  return (
    <div className="">
      {!isOpen ? (
        <div className=" text-center">
          <Button
            className="w-full bg-slate-200 text-cyan-500"
            onClick={() => changeIsOpen((prev) => !prev)}
          >
            open Comments ({prop.comment.length})
          </Button>
        </div>
      ) : (
        <>
          <CommentMap comment={prop.comment} />
          <Button
            className="w-full bg-slate-200 text-cyan-500"
            onClick={() => changeIsOpen((prev) => !prev)}
          >
            close
          </Button>
        </>
      )}
    </div>
  );
}
