"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { createContext, useContext, useState } from "react";
import { Dispatch } from "react";
import { User } from "./types/user.type";

export const UserContext = createContext<{ user?: User | undefined; setUser?: Dispatch<User | undefined> | undefined }>({});
export function Providers({ children }: { children: React.ReactNode }) {
  const [user,setUser] = useState<User>();
  const value = {user,setUser}
  return (
    <NextUIProvider>
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    </NextUIProvider>
  );
}
