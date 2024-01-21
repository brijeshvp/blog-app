import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Brijesh's Daily Blog</h1>
        <h2>
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere!
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product features | The latest in Technology | The Weekly debugging
        Nightmares & More!
      </p>
    </div>
  );
};

export default Banner;
