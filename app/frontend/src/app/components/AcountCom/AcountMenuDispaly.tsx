import React, { useContext } from "react";
import { User } from "@nextui-org/react";
import { UserContext } from "@/app/providers";
export default function AcountMenuDisplay() {
  const {user} = useContext(UserContext);
  return (
    <div
      className="bg-white  rounded-2xl w-1/4
    
    fixed bottom-2 border-1 border-gray-color"
    >
      <User
        className="  bg-white m-2 p-2 text-left"
        name={user?.name}
        description={``}
        avatarProps={{
          src: user?.img_url,
          size: "sm",
        }}
      />
    </div>
  );
}
