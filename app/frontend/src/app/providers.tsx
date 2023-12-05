"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { useContext } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
