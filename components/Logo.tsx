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
        src="https://cdn.sanity.io/images/gdkk2x8m/production/7d6b6174557429a0b223bb1e1fa8001d5fae4a7a-800x800.jpg"
        alt="logo"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;
