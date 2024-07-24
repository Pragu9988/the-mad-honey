import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="page-content py-5 md:py-10 lg:py-20">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
