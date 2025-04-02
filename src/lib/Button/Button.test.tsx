import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button component', () => {

    it('renders the button with the correct text', () => {
        const { getByText } = render(<Button text = "Click me" onClick = {() => {}} />)

        expect(getByText('Click me')).toBeTruthy()
    })

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn()
        const { getByText } = render(<Button text = "Click me" onClick = {handleClick} />)

        fireEvent.click(getByText('Click me'))
        
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

})