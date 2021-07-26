import { IonContent, IonHeader,  IonIcon,  IonItem,  IonLabel,  IonList,  IonListHeader,  IonMenu,  IonMenuToggle,  IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react"
import { Fragment, useState, useEffect } from "react"


const Menu = () => {
  // const [isOpen, setIsOpen] = useState('')
  //  useEffect(() => {
  //   setIsOpen(props.isOpen)
     
  //  }, [props.isOpen])
    return (
      <IonMenu content-id="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
  
      <IonContent>
        <IonList>
          <IonListHeader>
            Navigate
          </IonListHeader>
          <IonMenuToggle auto-hide="false">
            <IonItem button>
              <IonIcon slot="start" name='home'></IonIcon>
              <IonLabel>
                Home
              </IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
    
    )
}

export default Menu
