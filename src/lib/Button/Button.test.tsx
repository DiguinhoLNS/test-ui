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

    it('applies success status styles', () => {
        const { getByText } = render(<Button text = "Click me" status = "success" onClick = {() => {}} />)

        const button = getByText('Click me')
        expect(button).toHaveStyle('background-color: green')
        expect(button).toHaveStyle('color: white')
    })

    it('applies danger status styles', () => {
        const { getByText } = render(<Button text="Perigo" status="danger" onClick={() => {}} />)
        const button = getByText('Perigo')
        expect(button).toHaveStyle('background-color: red')
        expect(button).toHaveStyle('color: white')
    })
    
    it('applies warning status styles', () => {
        const { getByText } = render(<Button text="Atenção" status="warning" onClick={() => {}} />)
        const button = getByText('Atenção')
        expect(button).toHaveStyle('background-color: yellow')
        expect(button).toHaveStyle('color: black')
    })
    
    it('applies info status styles', () => {
        const { getByText } = render(<Button text="Info" status="info" onClick={() => {}} />)
        const button = getByText('Info')
        expect(button).toHaveStyle('background-color: blue')
        expect(button).toHaveStyle('color: white')
    })

    it('applies default styles when no status is provided', () => {
        const { getByText } = render(<Button text = "Click me" onClick = {() => {}} />)

        const button = getByText('Click me')
        expect(button).toHaveStyle('background-color: gray')
        expect(button).toHaveStyle('color: white')
    })

})