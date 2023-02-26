// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ReadStorage {
    function hexToNum(bytes32 HexNum) public pure returns (uint256) {
        return uint256(HexNum);
    }
}