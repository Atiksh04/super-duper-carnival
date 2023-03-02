import { FC } from 'react';
import TrendIcon from "../icons/trend.svg";
import Icon from '../components/Icon';
import Text from '../components/Text';
import AssetCard from '../components/AssetCards';
import CardsData from '../utils/cardsData';

const HomePage: FC = ()=>{

    // const variation = {value: 10, increaseOrDecrease: "inc"}
    // const pp = [Solana, Ethereum, Binance]
    return(
        <div className='w-screen h-screen bg-[#14172B] text-white px-20'>
            <div className='flex items-center justify-center flex-col  my-auto h-full'>
                <div className='flex items-center w-full text-left mb-16'>
                    <Icon icon={TrendIcon} altText={"trend-icon"}/>
                    <Text text={"Trending Assets"} additionalClasses="ml-4"/>
                </div>
                <div className='flex items-center w-full pt-12 overflow-x-auto'>
                    {
                        CardsData.map((card)=>
                        <AssetCard key={card.assetName} assetIcon={card.assetIcon} assetName={card.assetName} price={card.price} tvl={card.tvl} assetIconGradientColor={card.assetIconGradientColor} priceVariation={card.priceVariation} pairList={card.pairList}/>)
                    }
                </div>
            </div>
        </div>
    )
} 

export default HomePage;