import { IonButton, IonButtons, IonItem, IonLabel, IonList, IonText, IonToggle } from "@ionic/react";
import './styles.css'
interface IList {
  action?: boolean;
  items: {
    label: string;
    value?: string;
  }[];
  onClick?: React.MouseEventHandler<HTMLIonButtonElement> | undefined;
  onToggleChange?: (isActive: boolean) => void;
  isActive?: boolean; 
}

function ListData(props: IList) {
  const handleToggleChange = (event: CustomEvent) => {
    if (props.onToggleChange) {
      props.onToggleChange(event.detail.checked);
    }
  };

  return (
    <IonList className="ionList" inset={true}>
      {props.items.map((item, index) => (
        <IonItem key={index} lines="full">
          <IonLabel style={{ flex: 1, fontWeight: "bold", fontSize: "16px" }}>
            {item.label}
          </IonLabel>

          <IonText style={{ flex: 2 }}>{item.value}</IonText>
        </IonItem>
      ))}
      <IonItem>
        {props.isActive && (
          <IonText style={{fontWeight: "bold"}} color={"secondary"}>
            Paciente em acompanhamento
          </IonText>
        )}
         {!props.isActive && (
          <IonText style={{fontWeight: "bold"}} color={"danger"}>
            Paciente não está em acompanhamento
          </IonText>
        )}
        {props.action && (
          <IonToggle
            slot="end"
            onIonChange={handleToggleChange}
            checked={props.isActive}
          />
        )}
      </IonItem>
      <IonButtons className="containerLinkDetailsPatient">
        <IonButton routerLink="/detalhePaciente" onClick={props.onClick} fill="solid" color={"warning"} size="small">
          Ver detalhes do paciente
        </IonButton>
      </IonButtons>
    </IonList>
  );
}

export default ListData;
