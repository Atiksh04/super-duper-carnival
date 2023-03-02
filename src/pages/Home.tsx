import { FC } from 'react';
import TrendIcon from "../icons/trend.svg";
import Icon from '../components/Icon';
import Text from '../components/Text';
import AssetCard from '../components/AssetCards';
import Bitcoin from "../icons/bitcoin.svg";
import Solana from "../icons/solana.svg";
import Ethereum from "../icons/etherum.svg";
import Binance from "../icons/binance.svg";
import Shiba from "../icons/shiba.svg";

const HomePage: FC = ()=>{

    const variation = {value: 10, increaseOrDecrease: "inc"}
    const pp = [Solana, Ethereum, Binance]
    return(
        <div className='w-screen h-screen bg-[#14172B] text-white px-20'>
            <div className='flex items-center justify-center flex-col  my-auto h-full'>
                <div className='flex items-center w-full text-left mb-16'>
                    <Icon icon={TrendIcon} altText={"trend-icon"}/>
                    <Text text={"Trending Assets"} additionalClasses="ml-4"/>
                </div>
                <div className='flex items-center justify-between w-full mt-12'>
                    <AssetCard assetIcon={Bitcoin} assetName="Bitcoin (BTC)" price='$31,812.80' tvl='$60,000' assetIconGradientColor="rgba(234, 179, 0, 0.06)" priceVariation={variation} pairList={pp}/>
                    <AssetCard assetIcon={Bitcoin} assetName="Bitcoin (BTC)" price='$31,812.80' tvl='$60,000' assetIconGradientColor="rgba(234, 179, 0, 0.06)" priceVariation={variation} pairList={pp}/>

                </div>
            </div>
        </div>
    )
} 

export default HomePage;