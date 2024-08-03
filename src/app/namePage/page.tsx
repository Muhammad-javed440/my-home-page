import React from "react";
import Link from "next/link";
function page() {
  return (
    <>
      <div className="py-10 px-10">
        <h1>Welcome to namePage</h1>
      </div>
      <div className="py-10 px-10">I am name page</div>
      <div className="py-10 px-10">
        <Link href="/homePage">
          <button className="btn btn-primary bg-red-300 rounded-md">
            homePage
          </button>
        </Link>
      </div>
      <div className="py-10 px-10">
     <Link href="/">
    <button className="btn btn-primary bg-blue-300 rounded-md">
    Home
    </button>
    </Link>
    </div>
    </>
  );
}

export default page;
