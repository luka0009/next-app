"use client";
import Image from "next/image";


const Avatar = ({ src }: any) => {
  return (
    <div>
      <Image
        className="rounded-full"
        height={30}
        width={30}
        alt="avatar"
        src={src?.image || "https://www.w3schools.com/howto/img_avatar.png"}
      />
    </div>
  );
};

export default Avatar;
