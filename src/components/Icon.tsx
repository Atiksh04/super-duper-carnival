import { FC } from "react";
import {IconProp} from "../types/ComponentTypes";


const Icon:FC<IconProp>= (props) => {
    // a generic icon component
    return (
        <img src={props.icon} alt={`icon-${props.altText}`} className={props?.innerClass ?  `${props.innerClass} ${props.additionalClasses ? props.additionalClasses : ''}` : `h-4 w-4 ${props.additionalClasses ? props.additionalClasses : ''}`}/>
    )
}

export default Icon;