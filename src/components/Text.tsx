import { FC } from "react";
import {TextProp} from "../types/ComponentTypes";


const Text:FC<TextProp>= (props) => {
    return (
        <p className={props.innerClass ?`${props.innerClass} ${props.additionalClasses}` : `text-base font-bold text-[#ECF0FF] ${props.additionalClasses}`}>{props.text}</p>
    )
}

export default Text;