import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './styles.css';

interface IDescriptionCard {
  title: string;
  subtitle: string;
  description: string;
}

function DescriptionCard(props: IDescriptionCard) {
  return (
    <IonCard className="customCard">
      <IonCardHeader>
        <IonCardTitle className="customCardTitle">{props.title}</IonCardTitle>
        <IonCardSubtitle className="customCardSubtitle">{props.subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{props.description}</IonCardContent>
    </IonCard>
  );
}

export default DescriptionCard;
