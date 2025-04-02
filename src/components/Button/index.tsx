import React from 'react'
import type { ButtonProps } from './types'

export type { ButtonProps }
export const Button: React.FC <ButtonProps> = ({
    text,
    onClick,
}) => {

    return(

        <button
            onClick={onClick}
        >{text}</button>

    )

}