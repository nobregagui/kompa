import { useEffect, useState } from "react";
import { IonButton, IonContent, IonIcon, IonText } from "@ionic/react";
import Layout from "../../components/Layout";
import { menuButtons } from "../../data/menuData";
import ListData from "../../components/ListDataComponent";
import "./styles.css";
import SearchComponent from "../../components/SearchComponent";
import { fetchUsers, IUserData } from "../../services/userService";
import { useDispatch, useSelector } from 'react-redux';
import { addActivePatient, selectActivePatients, setSelectedPatient, viewPatientSelected } from "../../store/patients";
import { home } from "ionicons/icons";

const Patients: React.FC = () => {
  const [userData, setUserData] = useState<IUserData[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const patientSelected = useSelector(viewPatientSelected)
  const activePatients = useSelector(selectActivePatients); 
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setUserData(users);
    };

    getUsers();
  }, []);

  const handleToggleChange = (patientId: string | number, isActive: boolean) => {
    const patient = userData.find(user => user.id === Number(patientId));

    if (patient) {
      const updatedPatient = { 
        ...patient, 
        status: isActive ? "Em andamento" : "Pendente", 
        isActive 
      };
      dispatch(addActivePatient(updatedPatient)); 
    }
  };

  const filteredUsers = userData.filter((user) =>
    user.data.some(
      (item) =>
        item.label === "Nome" &&
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );


  return (
    <Layout menuButtons={menuButtons}>
     
      <IonContent color="light">
      <IonButton routerLink="/home" className="ion-padding" color={'dark'}>
        <IonIcon slot="start" icon={home}></IonIcon>
        Início
      </IonButton>
        <div className="containerTitleList">
          <IonText className="titleList">Pacientes</IonText>
        </div>
        
        <SearchComponent value={searchTerm} onSearch={setSearchTerm} />

        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            const userInfo = user.data.filter(
              (item) => item.label === "Nome" || item.label === "Email" || item.label === "Telefone"
            );
            return (
              <div key={user.id}>
                <ListData 
                  action 
                  items={userInfo}
                  onToggleChange={(isActive) => handleToggleChange(user.id, isActive)} 
                  isActive={activePatients.some(
                    (active) => active.id === user.id ? active.isActive : false
                  )}
                  onClick={() => dispatch(setSelectedPatient(user))}
                />
                <hr />
              </div>
            );
          })
        ) : (
          <div className="notFiltered">
            <IonText>Nenhum resultado encontrado, revise sua pesquisa</IonText>
          </div>
        )}
      </IonContent>
    </Layout>
  );
};

export default Patients;
