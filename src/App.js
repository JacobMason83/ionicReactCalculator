import { useState, useRef } from 'react'
import {
  IonApp,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonContent,
  IonList,
  IonListHeader,
  IonHeader,
  IonMenu,
  IonTitle,
  IonItem,
  IonMenuToggle,
  IonToolbar,
  IonLabel,
  IonButtons,
  IonButton,
  IonPage
} from '@ionic/react'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import './theme/App.css'
import * as math from 'mathjs'
import Button from './components/CreateButtons'


const App = () => {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState('')
  const calculationLogs = []
  const handleChange = val => {
    let inputUpdated = input + val
    setInput(inputUpdated)
  }
  // handle equal for setting up the equal button 
  const handleEqual = () => {
    calculationLogs.push(input + '=' + math.evaluate(input))
    setInput(math.evaluate(input))
  }
  const conversionFunction = (type) => {
    if(type === 'feet'){
      setInput(input * 12)
    }
    if(type === 'inches'){
      setInput(input / 12)
    }
    if(type === 'farenheight'){
      setInput((input * 9/5) + 32)
    }
    if(type === 'celsius'){
      setInput((input - 32) * 5/9)
    }
  }
   const bgColorChange = (mode) => {
     if(mode === 'darkMode') {
       setMode('dark-mode')
     }
     if(mode === 'lightMode') {
       setMode('light-mode')
     }
   }
  // const buttonArray = [
  //   ['C', ' ', '/'],
  //   ['7', '8', '9'],
  //   ['4', '5', '6', '+'],
  //   ['1', '2', '3'],
  //   ['0', '.', '']
  // ]
  // const renderButtons = () => {
  //   return buttonArray.map(row => {
  //     return (
  //       <IonRow className='button-row' key={row}>
  //         {row.map(digit => {
  //           return (
  //             <IonCol key={digit} className='ion-align-items-center'>
  //               <Button
  //                 shape='round'
  //                 fill='outline'
  //                 value={digit}
  //                 handleClick={handleChange}
  //               >
  //                 {digit}
  //               </Button>
  //             </IonCol>
  //           )
  //         })}
  //       </IonRow>
  //     )
  //   })
  // }

  return (
    <IonApp className={` main-container ${mode} `}>
      <IonMenu contentId='main-content'>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent color='primary'>
          <IonList>
            <IonListHeader>Choose</IonListHeader>
            <IonMenuToggle autoHide='false'>
              <IonItem button>
                <IonIcon slot='start' name='home'></IonIcon>
                <IonLabel onClick={() => conversionFunction('feet')}>Feet to Inches</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon slot='start' name='home'></IonIcon>
                <IonLabel onClick={() => conversionFunction('inches')}>Inches to Feet</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon slot='start' name='home'></IonIcon>
                <IonLabel onClick={() => conversionFunction('farenheight')}>Celsius to Farenheight</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon slot='start' name='home'></IonIcon>
                <IonLabel onClick={() => conversionFunction('celsius')}>Farenheight to Celsius</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon slot='start' name='home'></IonIcon>
                <IonLabel onClick={() => bgColorChange('darkMode')}>Dark Mode</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon slot='start' name='home'></IonIcon>
                <IonLabel onClick={() => bgColorChange('lightMode')}>Light Mode</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon slot='start' name='home'></IonIcon>
                <IonLabel onClick={() => setMode('')}>Originial Mode</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage className='ion-page  ' id='main-content'>
        <IonHeader className='navBar'>
          <IonToolbar className='navBar'>
            <IonButtons slot='start'>
              <IonMenuToggle>
                <IonButton>
                  <IonIcon slot='icon-only' name='menu-outline'></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle className='navBar'>Calculator App</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
      <div className='heros-section '>
        <IonLabel className='floatLabel' position='stacked'>{input}</IonLabel>
        <IonInput slot='end'  className='input-section text-right'>{input}</IonInput>

        <div className='button-section'>
          <IonRow className='button-row'>
            <IonCol>
              <IonButton
                className='button-wrapper operator'
                shape='round'
                color='none'
                value=''
                onClick={() => setInput('')}
              >
                C
              </IonButton>

              <Button
                shape='round'
                fill='outline'
                value='7'
                handleChange={handleChange}
              >
                7
              </Button>
              <Button
                shape='round'
                fill='outline'
                value='4'
                handleChange={handleChange}
              >
                4
              </Button>
              <Button
                fill='outline'
                value='1'
                handleChange={handleChange}
              >
                1
              </Button>
              <Button
                label='zero-btn'
                shape='round'
                fill='outline'
                value='0'
                handleChange={handleChange}
              >
                0
              </Button>
            </IonCol>
          </IonRow>
          <IonRow className='button-row'>
            <IonCol className='ion-align-items-center'>
            

              <Button
                shape='round'
                fill='outline'
                value='8'
                handleChange={handleChange}
              >
                8
              </Button>
           
              <Button
                shape='round'
                fill='outline'
                value='5'
                handleChange={handleChange}
              >
                5
              </Button>
              <Button
                shape='round'
                fill='outline'
                value='2'
                handleChange={handleChange}
              >
                2
              </Button>
            </IonCol>
          </IonRow>
          <IonRow className='button-row'>
            <IonCol className='ion-align-items-center'>
            <Button
                shape='round'
                fill='outline'
                value='/'
                handleChange={handleChange}
              >
                /
              </Button>
            

              <Button
                shape='round'
                fill='outline'
                value='9'
                handleChange={handleChange}
              >
                9
              </Button>
              <Button
                shape='round'
                fill='outline'
                value='6'
                handleChange={handleChange}
              >
                6
              </Button>
              <Button
                shape='round'
                fill='outline'
                value='3'
                handleChange={handleChange}
              >
                3
              </Button>
              <Button
                shape='round'
                fill='outline'
                value='.'
                handleChange={handleChange}
              >
                .
              </Button>
            </IonCol>
          </IonRow>
          <IonRow className='button-row'>
            <IonCol className='ion-align-items-center'>
           

            
              <Button
                shape='round'
                fill='outline'
                value='*'
                handleChange={handleChange}
              >
                *
              </Button>
              <Button
                shape='round'
                fill='outline'
                value='-'
                handleChange={handleChange}
              >
                -
              </Button>
              <Button
                shape='round'
                fill='outline'
                value='+'
                handleChange={handleChange}
              >
                +
              </Button>
              <IonButton
                className='button-wrapper operator equal-btn'
                shape='round'
                color='none'
                value='='
                onClick={() => handleEqual()}
              >
                =
              </IonButton>
            </IonCol>
          </IonRow>
        </div>
      </div>
      
    </IonApp>
  )
}

export default App
