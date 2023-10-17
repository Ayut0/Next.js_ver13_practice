import Link from "next/link";
import React from "react";

const IndexPage = () => {
  return (
    <>
      <div>This is second page</div>
      <Link href='/second-page/nested-route'>Go to nested route</Link>
    </>
  );
};

export default IndexPage;
