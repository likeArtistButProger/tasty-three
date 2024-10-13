import { Alchemy, Network } from "alchemy-sdk";

export const alchemySdk = new Alchemy({
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
})