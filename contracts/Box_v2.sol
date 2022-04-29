// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Box_v2{
    address public _contract;

    bool public initialize;

    address public owner;

    string public greeting;

    event Greeting(string greeting);


    function greet() public {
        greeting = "Hello , this is version 2";
        emit Greeting(greeting);
    }
}