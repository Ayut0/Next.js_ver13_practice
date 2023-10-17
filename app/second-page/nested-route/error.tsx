"use client"; // Error component is a client-only component

import React, { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <p>{error.message}</p>
      {/* Attempt to recover by trying re-render the segment */}
      <button onClick={() => reset()}>Try again</button>
    </>
  );
};

export default Error;
