import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header style={{ backgroundColor: "green" }}>
        <h1>This layout applies to Second page</h1>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
