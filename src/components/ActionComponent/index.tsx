import React from 'react';
import { IonActionSheet, IonButton, IonIcon } from '@ionic/react';
import { logOut } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { handleLogout } from '../../utils';

function ActionComponent() {
  const history = useHistory();

  const handleActionClick = (action: string) => {
    if (action === 'delete') {
      handleLogout(history);
    }
  };

  return (
    <>
      <IonButton color={'danger'} fill='clear' id="open-action-sheet">
        Sair
        <IonIcon slot="end" icon={logOut}></IonIcon>
      </IonButton>

      <IonActionSheet
        trigger="open-action-sheet"
        header="Tem certeza que deseja sair?"
        buttons={[
          {
            text: 'Sim, sair do sistema',
            role: 'destructive',
            data: { action: 'delete' },
            handler: () => handleActionClick('delete'), // Chama a função handleActionClick quando pressionado
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            data: { action: 'cancel' },
          },
        ]}
      ></IonActionSheet>
    </>
  );
}

export default ActionComponent;
