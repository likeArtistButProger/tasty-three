import { useCallback, useState } from "react";
import { Token } from "../model/token";
import { fetchTokensByOwner } from "../api/token";

interface TokensData {
    tokens: Token[];
    isLoading: boolean;
    updateTokens: (owner: string) => Promise<void>;
}

export const useTokens = (): TokensData => {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const updateTokens = useCallback(async (owner: string) => {
        setIsFetching(true);

        const tokens_ = await fetchTokensByOwner(owner, 100);

        setTokens(tokens_);
        setIsFetching(false);
    }, []);

    console.log(tokens);
    
    return {
        tokens,
        isLoading: isFetching,
        updateTokens
    };
}