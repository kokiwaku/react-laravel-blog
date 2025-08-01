import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto py-8">
      <Header />
      <div className="container mx-auto px-4 py-8 bg-orange-50">
        {children}
      </div>
      <Footer />
    </div>
  );
};