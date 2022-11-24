import React from "react";
import {ManType} from "../05_array_map/05";

type PropsType = {
    title:string
    man:ManType
    food:Array<string>
}

export const Destructuring:React.FC<PropsType> = ({title, man:{name},...props}) => {

// const{title,man:{name}} = props

    return(
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>
                {props.food}
            </div>
        </div>
    )
}
