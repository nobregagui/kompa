import { useState, useEffect } from "react";
import { IonHeader, IonImg, IonToolbar, IonButtons, IonMenuButton } from "@ionic/react";
import "./styles.css";
import PopoverComponent from "../PopoverComponent";
import ProfileComponent from "../ProfileComponent";

const HeaderComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <IonHeader>
      <IonToolbar>
        <div className="container">
          {!isMobile && <IonImg src="../logo.png" className="logo" />}
          {isMobile && <ProfileComponent />}
          {isMobile ? (
            <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
          ) : (
            <div className="containerMenuItems">
              <PopoverComponent textButton="Produtos" />
              <PopoverComponent textButton="Clientes" />
              <PopoverComponent textButton="Financeiro" />
              <PopoverComponent
                textButton="Pacientes"
                items={[
                  { textItem: "Meus pacientes", link: "/pacientes" },
                  {
                    textItem: "Em acompanhamento",
                    link: "/pacientesEmAcompanhamento",
                  },
                ]}
              />
            </div>
          )}
          {!isMobile && <ProfileComponent />}
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderComponent;
