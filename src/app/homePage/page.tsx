import React from "react";
import Link from "next/link";
function page() {
  return (
    <>
      <div className="py-10 px-10">
        <h1>Welcome to HomePage</h1>
      </div>
      <div className="py-10 px-10">I am a home page</div>
      <div className="py-10 px-10">
        <Link href="/namePage">
          <button className="btn btn-primary bg-green-300 rounded-md">
            namePage
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
