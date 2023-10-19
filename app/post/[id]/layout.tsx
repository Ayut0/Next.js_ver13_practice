// export const metadata = {
//   title: {
//     default: "Individual post",
//   },
//   description: "This is the individual post page",
// };

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header style={{ backgroundColor: "yellow" }}>
        <h1>This layout applies to the individual page</h1>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
