import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import HeaderComponent from '../../components/HeaderComponent';
import Menu from '../../components/Menu';

interface LayoutProps {
  children: React.ReactNode;
  menuButtons: any[];  
}

const Layout: React.FC<LayoutProps> = ({ children, menuButtons }) => {
  return (
    <>
      <Menu buttons={menuButtons} />
      <IonPage id="main-content">
        <HeaderComponent />
        <IonContent>
          {children}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Layout;
