import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import Patients from "./pages/Patients";
import { Provider } from "react-redux";
import { store } from "./store";
import PatientsInProgress from "./pages/PatientsInProgress";
import DetailsPatient from "./pages/DetailsPatient";

setupIonicReact();

const App: React.FC = () => {

  const [ifNotLogged, setIfNotLogged] = useState<boolean>(false)

  useEffect(() => {
    const logged = localStorage.getItem('auth')
    if (logged) {
      if (logged === 'true') {
        setIfNotLogged(true);
      } else {
        setIfNotLogged(false);
      }    }
  },[])

  return (
    <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/pacientes" component={Patients} />
          <ProtectedRoute exact path="/pacientesEmAcompanhamento" component={PatientsInProgress} />
          <ProtectedRoute exact path="/detalhePaciente" component={DetailsPatient} />

          <Route exact path="/">
          {ifNotLogged ? (
            <Redirect to="/login" />
          ) : (
            <Redirect to="/home" />
          )}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    </Provider>
  );
};

export default App;
