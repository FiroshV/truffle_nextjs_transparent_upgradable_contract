// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Box {
    address public _contract;

    bool public initialize;

    address public owner;

    string public greeting;

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(owner == msg.sender);
        _;
    }

    modifier isInitializer() {
        require(!initialize, "contract already initialized");
        _;
    }

    function getContractAddress() public view returns (address) {
        return _contract;
    }

    function initializer(address _contractAddress) external isInitializer {
        _contract = _contractAddress;
        initialize = true;
    }

    function updateContract(address _contractAddress) public isOwner{
        _contract = _contractAddress;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    function greet() public returns (bool) {
        (bool success, ) = _contract.delegatecall(
            abi.encodeWithSignature("greet()")
        );

        return success;
    }

    function greetCall() public returns (bool) {
        (bool success, ) = _contract.call(abi.encodeWithSignature("greet()"));

        return success;
    }
}
