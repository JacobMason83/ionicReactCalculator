import { IonCol, IonRow } from "@ionic/react"
import { Fragment } from "react"
import Button from "./CreateButtons"

const calcButtons = (props) => (
  
      <Fragment>
    <IonRow className='button-row'>
      <IonCol className='ion-align-items-center'>
        <Button
          shape='round'
          fill='outline'
          value=''
          handleClick={props.handleClick}
        >
          C
        </Button>

        <Button
          shape='round'
          fill='outline'
          value='/'
          handleClick={props.handleClick}
        >
          /
        </Button>
      </IonCol>
    </IonRow>
    <IonRow className='button-row'>
      <IonCol className='ion-align-items-center'>
        <Button
          shape='round'
          fill='outline'
          value=''
          handleClick={props.handleClick}
        >
          C
        </Button>

        <Button
          shape='round'
          fill='outline'
          value='/'
          handleClick={props.handleClick}
        >
          /
        </Button>
      </IonCol>
    </IonRow>
    <IonRow className='button-row'>
      <IonCol className='ion-align-items-center'>
        <Button
          shape='round'
          fill='outline'
          value='7'
          handleClick={props.handleClick}
        >
          7
        </Button>

        <Button
          shape='round'
          fill='outline'
          value='8'
          handleClick={props.handleClick}
        >
          8
        </Button>
        <Button
          shape='round'
          fill='outline'
          value='9'
          handleClick={props.handleClick}
        >
          9
        </Button>
        <Button
          shape='round'
          fill='outline'
          value='-'
          handleClick={props.handleClick}
        >
          -
        </Button>
      </IonCol>
    </IonRow>
    <IonRow className='button-row'>
      <IonCol className='ion-align-items-center'>
        <Button
          shape='round'
          fill='outline'
          value='4'
          handleClick={props.handleClick}
        >
          4
        </Button>

        <Button
          shape='round'
          fill='outline'
          value='5'
          handleClick={props.handleClick}
        >
          5
        </Button>
        <Button
          shape='round'
          fill='outline'
          value='6'
          handleClick={props.handleClick}
        >
          6
        </Button>
        <Button
          shape='round'
          fill='outline'
          value='+'
          handleClick={props.handleClick}
        >
          +
        </Button>
      </IonCol>
    </IonRow>
    <IonRow className='button-row'>
      <IonCol className='ion-align-items-center'>
        <Button
          shape='round'
          fill='outline'
          value='1'
          handleClick={props.handleClick}
        >
          1
        </Button>

        <Button
          shape='round'
          fill='outline'
          value='2'
          handleClick={props.handleClick}
        >
          2
        </Button>
        <Button
          shape='round'
          fill='outline'
          value='3'
          handleClick={props.handleClick}
        >
          3
        </Button>
      
      </IonCol>
    </IonRow>
    <IonRow className='button-row'>
      <IonCol className='ion-align-items-center'>
        <Button
          shape='round'
          fill='outline'
          value='0'
          handleClick={props.handleClick}
        >
          0
        </Button>

        <Button
          shape='round'
          fill='outline'
          value='.'
          handleClick={props.handleClick}
        >
          .
        </Button>
        <Button
          shape='round'
          fill='outline'
          value='='
          handleClick={props.handleClick}
        >
          =
        </Button>
      </IonCol>
    </IonRow>
    </Fragment>
  
)

export default calcButtons
