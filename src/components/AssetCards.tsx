import { FC } from "react";
import {AssetCardProp} from "../types/ComponentTypes";
import Icon from "./Icon";
import PopularPairs from "./PopularPairs";
import Text from "./Text";
import ValueWrapper from "./ValueWrapper";

const AssetCard:FC<AssetCardProp>= (props) => {
    return (
        <div className="h-[21.875rem] w-72 bg-cardBg bg-cover bg-no-repeat">
            <div className="h-[6.25rem] w-[6.25rem] relative left-[5.95rem] -top-12 rounded-full border-2 border-transparent flex items-center justify-center" style={{background: "linear-gradient(180deg, rgba(236, 240, 255, 0.1) 0%, rgba(59, 63, 87, 0) 100%) border-box"}}>
                <div className={`h-full w-full rounded-full flex items-center justify-center`} style={{background: `linear-gradient(to bottom, rgba(98, 106, 136, 0.1), ${props.assetIconGradientColor})`}}>
                    <Icon icon={props.assetIcon} altText={props.assetName} innerClass="h-12 w-12"/>
                </div>
               
            </div>
            <div className="h-auto relative -top-5">
                <Text text={props.assetName} innerClass="text-[#737BAE] text-xs text-center"/>
                <ValueWrapper currentPrice="$31,812.80" variation={props.priceVariation} additionalClasses="mt-3"/>
                <Text text="Price" innerClass="text-[#5A5F7D] text-xs text-center"/>

                <ValueWrapper currentPrice={props.tvl} additionalClasses="mt-3"/>
                <Text text="TVL" innerClass="text-[#5A5F7D] text-xs text-center"/>

                <PopularPairs currencies={props.pairList}/>
                <Text text="Popular pairs" innerClass="text-[#5A5F7D] text-xs text-center"/>

            </div>
        </div>
    )
}


export default AssetCard;