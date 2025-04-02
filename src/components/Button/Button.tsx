import React from 'react'

export interface ButtonProps {
    text: string
    onClick?: () => void
}

const Button: React.FC <ButtonProps> = ({
    text,
    onClick,
}) => {

    return(

        <button
            onClick={onClick}
        >{text}</button>

    )

}

export default Button