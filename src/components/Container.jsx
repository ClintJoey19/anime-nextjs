import React from "react";

const Container = ({ children, className }) => {
  return (
    <section
      className={`w-full flex justify-center items-center px-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
