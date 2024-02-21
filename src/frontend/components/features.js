import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className=" bg-gray-200 from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
      <div>
        <h1 className="text-5xl font-bold">Featured NFTs</h1>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border p-4">
              <img
                src="https://i.seadn.io/s/raw/files/d26a45171f58f79884a855bd5d8eb466.png?auto=format&dpr=1&h=500"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">Ape Mutant Clubs</div>

                <div>
                  <h4 className="text-center mt-4">24h volume </h4>

                  <p className="text-gray-700 text-center text-3xl mt-1">
                    {" "}
                    &lt; 0.01 ETH
                  </p>
                </div>
              </div>
              <div className="px-1 py-4">
                <Link to="/">
                  <a href="#" className="text-blue-500 hover:underline">
                    View my Listed NFTs
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src="https://i.seadn.io/s/raw/files/27dd47b1ac924ecfa74a72e382ce2965.gif?auto=format&dpr=1&h=500"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">
                  PolyChess Artefacts
                </div>

                <div>
                  <h4 className="text-center mt-4">24h volume </h4>

                  <p className="text-gray-700 text-center text-3xl mt-1">
                    {" "}
                    &lt; 0.01 ETH
                  </p>
                </div>
              </div>
              <div className="px-1 py-4">
                <Link to="/">
                  <a href="#" className="text-blue-500 hover:underline">
                    View my Listed NFTs
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src="https://i.seadn.io/s/raw/files/5cb61158c07739c35e052faacde7df67.png?auto=format&dpr=1&h=500"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">
                  Funny Pandas Polygon
                </div>
                <h4 className="text-center mt-4">24h volume </h4>
                <p className="text-gray-700 text-3xl">&lt; 0.01 ETH</p>
              </div>
              <div className="px-1 py-4">
                <Link to="/">
                  <a href="#" className="text-blue-500 hover:underline">
                    View my Listed NFTs
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <img
                src="https://i.seadn.io/s/raw/files/94c46b24ebf8713d1bbb34f264ee87e3.jpg?auto=format&dpr=1&h=500"
                alt="Placeholder Image"
                className="w-full h-48 rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">Anime Verse</div>
                <h4 className="text-center mt-4">24h volume </h4>
                <p className="text-gray-700 text-3xl">&lt; 0.01 ETH</p>
              </div>
              <div className="px-1 py-4">
                <Link to="/">
                  <a href="#" className="text-blue-500 hover:underline">
                    View my Listed NFTs
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
