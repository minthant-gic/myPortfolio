import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-red-500 fixed top-0 w-[100%] z-10">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-[24px]">Portfolio</div>

                <div className="flex gap-6">
                    <Link legacyBehavior href="/">
                        <a className="hover:text-[#ff4D41]">Home</a>
                    </Link>
                    <Link legacyBehavior href="/about">
                        <a className="hover:text-[#ff4D41]">About</a>
                    </Link>
                    <Link legacyBehavior href="/portfolio">
                        <a className="hover:text-[#ff4D41]">Portfolio</a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                        <a className="hover:text-[#ff4D41]">Blog</a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                        <a className="hover:text-[#ff4D41]">Contact</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;