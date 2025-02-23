import React, { useState } from "react";
import { IonButton, IonButtons, IonContent, IonIcon, IonImg, IonMenu, IonMenuToggle } from "@ionic/react";
import {chevronDown, chevronUp} from 'ionicons/icons';

import "./styles.css";

interface IMenu {
  buttons: {
    textButton: string;
    link?: string;
    buttonChildren?: {
      textButton: string;
      link?: string;
    }[];
  }[];
}

function Menu(props: IMenu) {
  const [openButtons, setOpenButtons] = useState<{ [key: string]: boolean }>({});

  const toggleChildren = (textButton: string) => {
    setOpenButtons((prev) => ({
      ...prev,
      [textButton]: !prev[textButton],
    }));
  };

  return (
    <IonMenu side="end" contentId="main-content">
      <IonContent className="ion-padding">
        <div className="containerImageLogoMenu">
          <IonImg src="../logo.jpg" className="logoMenu" />
        </div>
        <IonButtons className="containerMenuButtons">
          {props.buttons.map((item) => (
            <div key={item.textButton} className="menuItem">
              <IonButton  style={{fontWeight: 'bold'}} color={'secondary'} onClick={() => toggleChildren(item.textButton)} routerLink={item.link}>
                {item.textButton}
                {item.buttonChildren && (
                  <IonIcon slot="end" icon={openButtons[item.textButton] ? chevronUp : chevronDown}></IonIcon>
                )}
              </IonButton>

              {openButtons[item.textButton] && item.buttonChildren?.map((child) => (
               <IonMenuToggle>

               <IonButton onClick={() => toggleChildren(item.textButton)} key={child.textButton} color={"medium"} routerLink={child.link} className="childButton">
                  {child.textButton}
                </IonButton>
               </IonMenuToggle>
              ))}
            </div>
          ))}
        </IonButtons>
      </IonContent>
    </IonMenu>
  );
}

export default Menu;
