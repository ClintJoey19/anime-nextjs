import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link href="/" className="text-blue-500">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
