import { useState } from "react";
import Link from "next/link";
import Web3Container from "../lib/Web3Container";

enum BoxVersion {
  V1 = "boxV1",
  V2 = "boxV2",
}

const Upgrade = (props: { accounts: any; contract: any; web3: any }) => {
  const [boxVersion, setBoxVersion] = useState("");

  const setDappVersion = async (version: BoxVersion) => {
    const { accounts, contract } = props;

    let contractAddress = "";

    if (version === BoxVersion.V1) {
      contractAddress = contract["boxV1"].address;
    } else {
      contractAddress = contract["boxV2"].address;
    }

    console.log("contractAddress: ", typeof(contractAddress));

    await contract["box"].methods.updateContract(contractAddress).send({ from: accounts[0] })
      .then(() => {
        console.log("Contract updated!");
        setBoxVersion(version);
      });
  };

  return (
    <div className="h-screen bg-green-300">
      <h1 className="grid w-screen text-center p-4 text-4xl font-bold text-sky-700">
        Upgradeable Contract Demo
      </h1>
      <div className="flex space-between justify-evenly mt-28 text-center p-4 text-2xl font-semibold text-white">
        <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
          <button onClick={() => setDappVersion(BoxVersion.V1)}>
            <a>Dapp V1</a>
          </button>
        </div>
        <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
          <button onClick={() => setDappVersion(BoxVersion.V2)}>
            <a>Dapp V2</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({
      web3,
      accounts,
      contract,
    }: {
      web3: any;
      accounts: any;
      contract: any;
    }) => <Upgrade accounts={accounts} contract={contract} web3={web3} />}
  />
);
