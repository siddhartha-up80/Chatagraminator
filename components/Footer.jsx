import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-4 text-center flex-shrink-0">
      <div className="text-xs">
        <span className="mr-2">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            © 2023 Chatagraminator
          </Link>
        </span>
        <span className="mr-2">
          <Link href="/about" className="text-gray-500 hover:text-gray-700">
            About
          </Link>
        </span>
        <span className="mr-2">
          <Link href="/help" className="text-gray-500 hover:text-gray-700">
            Help Center
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
