"use client";
import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
const Links = [
  {
    id: 1,
    name: "Work",
    href: "/work",
  },
  { id: 2, name: "Blogs", href: "/blogs" },
  { id: 3, name: "Projects", href: "/Project" },
];
const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-6">
          <Link href={"/"}>
            <Image
              src={"/ava.png"}
              alt="Logo"
              width={60}
              height={30}
              className="rounded-md"
            />
          </Link>

          <div className="flex items-center justify-center gap-4">
            {Links.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <ThemeSwitch start="top-right" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
