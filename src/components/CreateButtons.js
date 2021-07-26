import { IonButton } from "@ionic/react"

const Button = (props) => {
    return (
        <IonButton size='small' shape='round' color='none'  className={`button-wrapper ${isNaN(props.children) ? "operator" : null} ${props.label}`}
              
              onClick={() => {
                props.handleChange(props.children)
            }}>{props.children}</IonButton>

            
        

    )
}
export default Button