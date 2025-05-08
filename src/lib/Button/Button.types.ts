/**
 * Button component props.
 */
export interface ButtonProps {
    /**
    * Text displayed inside the button.
    */
    text: string

    /**
    * Status of the button, this will determine the button's color and style.
    */ 
    status?: 'danger' | 'success' | 'warning' | 'info'

    /**
    * Function called when the button is clicked.
    */
    onClick?: () => void
}