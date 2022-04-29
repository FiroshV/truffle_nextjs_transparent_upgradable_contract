import Link from "next/link";
import { useEffect, useState } from "react";
import Web3Container from "../lib/Web3Container";

const Dapp = (props: { accounts: any; contract: any; web3: any }) => {
  const [value, setValue] = useState(0);

  const [greeting,setGreeting] = useState("");

  useEffect(() => {
    getGreeting();
  } , []);

  const getGreeting = async () => {
    const { accounts, contract} = props;
    const response = await contract["box"].methods.getGreeting().call({from: accounts[0]});
    setGreeting(response);
    console.log("response: ", response);
  };


  const theGreeting = async () => {
    const { accounts, contract} = props;
    await contract["box"].methods.greet().send({from: accounts[0]});
    await getGreeting();
  };

  // const incrValue = async () => {
  //   console.log("Increamenting value...");
  //   const { accounts, contract } = props;
  //   await contract.methods.set().send({ from: accounts[0] }).then(() => {console.log("Value increamented!")});
  //   await getValue();
  // };


  // const getValue = async () => {
  //   const { accounts, contract } = props;
  //   const response = await contract.methods.get().call({ from: accounts[0] });
  //   setValue(response);
  //   console.log("Value: ", response);
  // };

  return (
    <div className="h-screen bg-green-300">
      <h1 className="grid w-screen text-center p-4 text-4xl font-bold text-sky-700">
        Upgradeable Contract Demo
      </h1>
      <div className="flex flex-col">
        <div className="flex space-between justify-evenly mt-28 text-center p-4 text-2xl font-semibold text-white">
          <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
            <button onClick={theGreeting}>
              <a>Say Greeting</a>
            </button>
          </div>
          <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400">
            <button onClick={getGreeting}>
              <a>Get Greeting</a>
            </button>
          </div>
        </div>
        <div className="bg-blue-400 rounded-full p-4 hover:bg-red-400  space-between justify-evenly mt-28 text-center p-4 text-2xl font-semibold text-white w-1/5 self-center">
          <button>
            <a>Greeting: {greeting}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({
      web3,
      accounts,
      contract,
    }: {
      web3: any;
      accounts: any;
      contract: any;
    }) => <Dapp accounts={accounts} contract={contract} web3={web3} />}
  />
);
