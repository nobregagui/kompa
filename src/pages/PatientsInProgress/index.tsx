import { useEffect, useState } from "react";
import { IonButton, IonContent, IonIcon, IonText } from "@ionic/react";
import Layout from "../../components/Layout";
import { menuButtons } from "../../data/menuData";
import ListData from "../../components/ListDataComponent";
import SearchComponent from "../../components/SearchComponent";
import { fetchUsers, IUserData } from "../../services/userService";
import { useDispatch, useSelector } from 'react-redux';
import { addActivePatient, selectActivePatients } from "../../store/patients";
import { home } from "ionicons/icons";

const PatientsInProgress: React.FC = () => {
  const [userData, setUserData] = useState<IUserData[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); 
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

  const filteredActivePatients = userData.filter((user) => 
    user.data.some(
      (item) => item.label === "Nome" && 
                item.value.toLowerCase().includes(searchTerm.toLowerCase()) &&
                activePatients.some((active: { id: number; isActive: boolean }) => active.id === user.id && active.isActive)
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
          <IonText className="titleList">Pacientes em acompanhamento</IonText>
        </div>
        
        <SearchComponent value={searchTerm} onSearch={setSearchTerm} />

        {filteredActivePatients.length > 0 ? (
          filteredActivePatients.map((user) => {
            const filteredData = user.data.filter(
              (item) => item.label === "Nome" || item.label === "Email" || item.label === "Telefone"
            );

            const isPatientActive = activePatients.some((active: { id: number; isActive: boolean }) => active.id === user.id && active.isActive);

            return (
              <div key={user.id}>
                <ListData 
                  action 
                  items={filteredData}  
                  onToggleChange={(isActive) => handleToggleChange(user.id, isActive)} 
                  isActive={isPatientActive} 
                />
                <hr />
              </div>
            );
          })
        ) : (
          <div className="notFiltered">
            <IonText>Nenhum paciente em andamento encontrado</IonText>
          </div>
        )}
      </IonContent>
    </Layout>
  );
};

export default PatientsInProgress;
