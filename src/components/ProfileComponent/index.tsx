import { IonText, IonImg } from '@ionic/react';
import './styles.css'
const ProfileComponent: React.FC = () => {
  return (
    <div className='containerProfile'>
     <IonText>Seja bem-vindo, Gui!</IonText>
     <IonImg src="../avatar.png" className="logoProfile" />
    </div>
  );
};

export default ProfileComponent;
