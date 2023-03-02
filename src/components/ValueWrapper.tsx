import { FC } from "react";
import {ValueWrapperProp} from "../types/ComponentTypes";
import Text from "./Text";


const ValueWrapper:FC<ValueWrapperProp>= (props) => {

    const getCurrentVariationText = () => {
        // returning correct value based on price increase or decrease
        return `${props.variation?.increaseOrDecrease === 'inc' ? '+' : '-' }${props.variation?.value}%`;
    }

    return (
        <div className={`my-2 mx-auto border-2 border-transparent rounded-full w-60 h-10 flex items-center justify-center  ${props.additionalClasses ? props.additionalClasses : ''}`} style={{background: "linear-gradient(#14172B, #14172B) padding-box, linear-gradient(to bottom, rgba(236, 240, 255, 0.1), rgba(59, 63, 87, 0)) border-box"}}>
            <Text text={props.currentPrice}/>
            {
                props.variation ? 
                    <Text text={getCurrentVariationText()} innerClass={props.variation?.increaseOrDecrease === 'inc' ? 'text-[#00FFA3] text-xs absolute right-10' : 'text-[#FF4D4D] text-xs absolute right-8'}/>
                : null
            }
        </div>
    )
}

export default ValueWrapper;