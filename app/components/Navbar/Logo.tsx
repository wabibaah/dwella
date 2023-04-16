"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import logo from "/assets/";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/assets/images/reallogo.jpg"
    />
  );
};

export default Logo;
