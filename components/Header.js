import React from "react";
import Link from "next/link";
function Header() {
  return (
    <div className="border-b py-12 px-4 border-slate-300 bg-white">
      <div className="max-w-screen-lg mx-auto flex justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold my-2 text-slate-900">
            <Link href="/">AI-Birdy</Link>
          </h1>
          <h3 className="text-lg"> AI Generated Twitter Messages For You</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
