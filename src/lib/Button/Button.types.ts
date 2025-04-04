/**
 * Button component props.
 */
export interface ButtonProps {
    /**
    * Text displayed inside the button.
    */
    text: string

    /**
    * Function called when the button is clicked.
    */
    onClick?: () => void
}