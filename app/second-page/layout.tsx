import React from "react";

export const metadata = {
  title: "Second Page",
  description: "This is the second page",
}

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
