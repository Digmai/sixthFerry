import React from "react";
import "./style.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Leyout = ({ children }: React.PropsWithChildren<LayoutProps>) => {
  return <div className="Leyout">{children}</div>;
};
