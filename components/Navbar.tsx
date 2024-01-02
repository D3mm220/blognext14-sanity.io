import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div>
      <div className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
        <Link href="/" className="font-bold text-4xl">
          Demian<span className="text-primary">Blog</span>
        </Link>

        <ModeToggle />
      </div>
      <h2 className="w-full relative font-bold flex items-center  max-w-7xl mx-auto px-4 py-5">
        With Sanity.io
      </h2>
    </div>
  );
};

export default Navbar;
