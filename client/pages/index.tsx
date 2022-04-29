import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-green-300">
      <h1 className="grid w-screen text-center p-4 text-4xl font-bold text-sky-700">Upgradeable Contract Demo</h1>
      <div className="flex space-between justify-evenly mt-28 text-center p-4 text-2xl font-semibold text-white">
      <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
        <Link href="/dapp">
          <a>My Dapp Functions</a>
        </Link>
      </div>
      <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
        <Link href="/upgrade">
          <a>Upgrade Contract</a>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
