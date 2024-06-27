"use client"
import Menu from "@/components/SideMenuCom/Menu";
import Title from "@/components/Title";
import { Divider } from "@nextui-org/react";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Title />
            <Divider className="mt-2" />
            <div className=" relative flex flex-row">
                <Menu />
                <div className="w-3/4 " style={{ marginLeft: "25%" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
