import { AssetCardProp } from "../types/ComponentTypes"
import Bitcoin from "../icons/bitcoin.svg";
import Solana from "../icons/solana.svg";
import Ethereum from "../icons/etherum.svg";
import Binance from "../icons/binance.svg";
import Shiba from "../icons/shiba.svg";

const CardsData:AssetCardProp[] = [
    {
        assetIcon: Bitcoin,
        assetIconGradientColor: "rgba(234, 179, 0, 0.06)",
        assetName: "Bitcoin (BTC)",
        priceVariation: {value: 10, increaseOrDecrease: "inc"},
        price: "$31,812.80",
        tvl: "$60,000",
        pairList: [Solana, Ethereum, Binance]
    },
    {
        assetIcon: Solana,
        assetIconGradientColor: "rgba(220, 31, 255, 0.1))",
        assetName: "Solana (SOL)",
        priceVariation: {value: 12.32, increaseOrDecrease: "dec"},
        price: "$32.83",
        tvl: "$60,000",
        pairList: [Bitcoin, Ethereum, Binance]
    },
    {
        assetIcon: Ethereum,
        assetIconGradientColor: "rgba(237, 240, 244, 0.1)",
        assetName: "Ethereum (ETH)",
        priceVariation: {value: 11.93, increaseOrDecrease: "dec"},
        price: "$1,466.45",
        tvl: "$60,000",
        pairList: [Solana, Bitcoin, Binance]
    },
    {
        assetIcon: Binance,
        assetIconGradientColor: "rgba(234, 179, 0, 0.06)",
        assetName: "Binance USD (BUSD)",
        priceVariation: {value: 0.26, increaseOrDecrease: "inc"},
        price: "$1.00",
        tvl: "$60,000",
        pairList: [Solana, Ethereum, Binance]
    },
    {
        assetIcon: Shiba,
        assetIconGradientColor: "rgba(228, 45, 4, 0.1)",
        assetName: "Shiba Inu (SHIB)",
        priceVariation: {value: 8.1, increaseOrDecrease: "dec"},
        price: "$0.00000001948",
        tvl: "$60,000",
        pairList: [Solana, Ethereum, Binance]
    }
]

export default CardsData;