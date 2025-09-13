"use client";
import React from "react";
import { cn } from "@/lib/utils";
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `container mx-auto max-w-3xl px-4 animate-fade-in-blur` + className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
