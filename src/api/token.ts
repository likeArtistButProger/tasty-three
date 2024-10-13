import { alchemySdk } from ".";
import { Token } from "../model/token";

export const fetchTokensByOwner = async (owner: string, pageSize: number) => {
    try {
        const res = await alchemySdk.nft.getNftsForOwner(owner, {
            pageSize,
        })
    
        const tokens = res.ownedNfts;
        const tokensFormatted = tokens.map((token) => {
            const t: Token = {
                name: token.name ?? "",
                url: token.image.pngUrl || ""
            }

            return t;
        }).filter((t) => t.url);

        return tokensFormatted;
    } catch (err) {
        console.error("Failed to fetch tokens:", err);
        return [];
    }
}