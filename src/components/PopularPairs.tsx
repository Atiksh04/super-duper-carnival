import { FC } from "react";
import {PopularPairsProps} from "../types/ComponentTypes";
import Icon from "./Icon";


const PopularPairs:FC<PopularPairsProps>= (props) => {

    return (
        <div className="bg-[#14172B] mt-4 mb-2 mx-auto border-2 border-transparent rounded-full w-32 h-10 flex items-center justify-evenly">
            {
                props.currencies.map((value, index)=>
                    <Icon icon={value} altText={`pp-${index}`} key={index} innerClass="h-[1.375rem] w-[1.375rem]"/>
                )
            }
        </div>
    )
}

export default PopularPairs;