import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface IActionCard {
  subtitle: string;
  title: string;
  description: string;
  buttons: {
    textButton: string;
  }[];
}

function ActionCard(props: IActionCard) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{props.description}</IonCardContent>

<div style={{padding: '15px', display: 'flex', justifyContent: 'space-between'}}>
      {props.buttons.map((button, index) => (
        <IonButton key={index} color={index === 1 ?'dark' : 'secondary'} size="small" fill="solid">{button.textButton}</IonButton>
      ))}
</div>
    </IonCard>
  );
}

export default ActionCard;
