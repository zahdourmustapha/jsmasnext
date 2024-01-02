import React from "react";
import "@/styles/globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default layout;
