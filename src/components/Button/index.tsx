import React from 'react'
import { ButtonProps } from './types'

export const Button: React.FC <ButtonProps> = ({
    text,
    onClick,
}) => {

    return(

        <button
            onClick={onClick}
        >TESTE BUTTON</button>

    )

}