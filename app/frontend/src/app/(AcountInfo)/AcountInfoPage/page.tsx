"use client";
import Title from "@/components/Title";
import { Divider } from "@nextui-org/react";
import Menu from "@/components/SideMenuCom/Menu";
import AcountInfo from "@/components/AcountCom/AcountSetting";
export default function AcountInfoPage() {
  return (
    <div>
      <Title />
      <Divider className="mt-2" />
      <div className=" relative flex flex-row">
        <Menu />
        <div className="w-3/4 " style={{ marginLeft: "25%" }}>
          <AcountInfo />
        </div>
      </div>
    </div>
  );
}
