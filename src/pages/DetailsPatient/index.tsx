import { menuButtons } from "../../data/menuData";
import Layout from "../../components/Layout";
import { viewPatientSelected } from "../../store/patients";
import { useSelector } from "react-redux";
import CardImage from "../../components/CardImageComponent";
import "./styles.css";
import { IonButton, IonIcon, IonText } from "@ionic/react";
import { arrowBack } from "ionicons/icons";

function DetailsPatient() {
  const patientSelected = useSelector(viewPatientSelected);

  const nome =
    patientSelected?.data.find(
      (item: { label: string }) => item.label === "Nome"
    )?.value || "";
  const email =
    patientSelected?.data.find(
      (item: { label: string }) => item.label === "Email"
    )?.value || "";
  const telefone =
    patientSelected?.data.find(
      (item: { label: string }) => item.label === "Telefone"
    )?.value || "";
  const username =
    patientSelected?.data.find(
      (item: { label: string }) => item.label === "Nome de Usuário"
    )?.value || "";
  const address =
    patientSelected?.data.find(
      (item: { label: string }) => item.label === "Endereço"
    )?.value || "";

  const description = `
  O nome do paciente é <strong>${nome}</strong>, ele está registrado com o e-mail <strong>${email}</strong> e o telefone de contato é <strong>${telefone}</strong>.
  <br /> <br /> O nome de usuário atribuído é <strong>${username}</strong> e o paciente reside no endereço <strong>${address}</strong>.
  Essas são as informações principais de seu cadastro.
`;

  return (
    <Layout menuButtons={menuButtons}>
      <IonButton routerLink="/pacientes" className="ion-padding" color={'dark'}>
        <IonIcon slot="start" icon={arrowBack}></IonIcon>
        Voltar
      </IonButton>
      <div className="containerImageCard">
        <IonText class="textPatient">Detalhes do paciente, {nome}</IonText>
        <CardImage
          srcImg="../goku.png"
          title={nome}
          subtiitle={email}
          description={description}
        />
      </div>
    </Layout>
  );
}

export default DetailsPatient;
