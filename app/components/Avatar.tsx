"use client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <Image
        className="rounded-l-full"
        height="30"
        width="30"
        alt="Avatar"
        src={src || "/assets/images/reallogo.jpg"}
      />
    </div>
  );
};

export default Avatar;
