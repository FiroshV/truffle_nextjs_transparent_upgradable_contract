import React from "react";
import getWeb3 from "./getWeb3";
import getContract from "./getContract";
import boxContractDefinition from "./contracts/Box.json";
import boxV1ContractDefinition from "./contracts/Box_v1.json";
import boxV2ContractDefinition from "./contracts/Box_v2.json";

export default class Web3Container extends React.Component {
  state = { web3: null, accounts: null, contract: null };

  async componentDidMount() {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const boxContract = await getContract(web3, boxContractDefinition);
      const boxV1Contract = await getContract(web3, boxV1ContractDefinition);
      const boxV2Contract = await getContract(web3, boxV2ContractDefinition);
      this.setState({
        web3,
        accounts,
        contract: {
          box: boxContract,
          boxV1: boxV1Contract,
          boxV2: boxV2Contract,
        },
      });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  }

  render() {
    const { web3, accounts, contract } = this.state;
    return web3 && accounts
      ? this.props.render({ web3, accounts, contract })
      : this.props.renderLoading();
  }
}
