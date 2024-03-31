"use client";

import { NextUIProvider } from "@nextui-org/react";

export function NextProvider({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
