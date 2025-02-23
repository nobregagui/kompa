import { IonText, IonImg, IonButton, IonIcon, IonButtons } from "@ionic/react";
import "./styles.css";
import { logOut } from "ionicons/icons";
import { useHistory } from "react-router";
import { handleLogout } from "../../utils";

const ProfileComponent: React.FC = () => {
  const history = useHistory();

  return (
    <div className="containerProfile">
      <IonText>Seja bem-vindo, Gui!</IonText>
      <IonImg src="../avatar.png" className="logoProfile" />
      <IonButtons class="containerLogout">
        <IonButton
          onClick={() => handleLogout(history)}
          color={"danger"}
          fill="clear"
          id="open-action-sheet"
        >
          Sair
          <IonIcon slot="end" icon={logOut}></IonIcon>
        </IonButton>{" "}
      </IonButtons>
    </div>
  );
};

export default ProfileComponent;
