"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ReactNode } from "react";

const ProgressBar = ({ children }: { children: ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="#FF7F50"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressBar;
