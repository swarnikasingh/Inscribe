import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://th-i.thgim.com/public/incoming/uxomjh/article65794861.ece/alternates/LANDSCAPE_1200/iStock-1318373664.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Revolutionizing Education with NFTs
            </h2>

            <p className="mt-4 text-gray-600">
              EduNFT democratizes education by tokenizing content as NFTs,
              ensuring fair compensation for creators and broad access to
              quality resources globally.
            </p>

            <Link to="/create">
              <button className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
