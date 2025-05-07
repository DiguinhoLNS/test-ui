import React from 'react'
import { ButtonProps } from './Button.types'

export type { ButtonProps } from './Button.types'

export const Button: React.FC <ButtonProps> = ({
    text,
    status,
    onClick,
}) => {

    const determineButtonStyle = () => {
        switch (status) {
            case 'danger':
                return { backgroundColor: 'red', color: 'white' }
            case 'success':
                return { backgroundColor: 'green', color: 'white' }
            case 'warning':
                return { backgroundColor: 'yellow', color: 'black' }
            case 'info':
                return { backgroundColor: 'blue', color: 'white' }
            default:
                return { backgroundColor: 'gray', color: 'white' }
        }
    }

    return( 

        <button
            style={{
                outline: 'none',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                ...determineButtonStyle()
            }}
            onClick={onClick}
        >{text}</button>

    )

}