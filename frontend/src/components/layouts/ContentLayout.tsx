import React from "react";
import { Header } from "./Header";

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto py-8">
      <Header />
      {children}
    </div>
  );
};