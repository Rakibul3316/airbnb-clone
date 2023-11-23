"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      width={100}
      height={100}
      className=" hidden md:block cursor-pointer"
      src="/images/logo.png"
    />
  );
}
