import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto py-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
};