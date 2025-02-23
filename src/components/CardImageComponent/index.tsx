import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ICardImage {
    srcImg: string;
    subtiitle: string;
    title: string;
    description: string;
}

function CardImage({ srcImg, title, subtiitle, description }: ICardImage) {
  return (
    <IonCard style={{maxWidth: '600px'}}>
      <img alt="Patient Image" style={{width: '100%'}} src={srcImg} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtiitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <div dangerouslySetInnerHTML={{ __html: description }} />  
      </IonCardContent>
    </IonCard>
  );
}

export default CardImage;
