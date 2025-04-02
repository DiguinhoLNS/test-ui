import React from 'react'
import { ButtonProps } from './Button.types'

export type { ButtonProps } from './Button.types'

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