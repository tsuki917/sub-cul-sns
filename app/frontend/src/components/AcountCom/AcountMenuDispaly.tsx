import React from "react";
import { User } from "@nextui-org/react";
export default function AcountMenuDisplay() {
  return (
    <div
      className="bg-white  rounded-2xl w-1/4
    
    fixed bottom-2 border-1 border-gray-color"
    >
      <User
        className="  bg-white m-2 p-2 text-left"
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          size: "sm",
        }}
      />
    </div>
  );
}
