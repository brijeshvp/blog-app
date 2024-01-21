import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: any) => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="heroImage.jpeg"
        alt="logo"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;
