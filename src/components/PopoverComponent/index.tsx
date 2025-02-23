import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonItem,
  IonList,
  IonPopover,
} from "@ionic/react";
import "./styles.css";

interface IPopover {
  textButton: string;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "medium"
    | "dark"
    | undefined;
  items?: {
    textItem: string;
    link?: string;
  }[];
}

function PopoverComponent(props: IPopover) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<MouseEvent | undefined>(undefined);

  return (
    <>
      <IonButton
        onClick={(e) => {
          setEvent(e.nativeEvent); 
          setIsOpen(true);
        }}
        color={props.color ? props.color : "secondary"}
      >
        {props.textButton}
      </IonButton>

      <IonPopover
        isOpen={isOpen}
        event={event} 
        onDidDismiss={() => setIsOpen(false)}
        dismissOnSelect={true}
        showBackdrop={false}
        keepContentsMounted={true}
      >
        <IonContent class="ion-padding">
          <IonList>
            {props.items?.map((item, index) => (
              <IonItem
                onClick={() => setIsOpen(false)}
                key={index}
                button
                routerDirection="forward"
                routerLink={item.link}
              >
                {item.textItem}
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
}

export default PopoverComponent;
