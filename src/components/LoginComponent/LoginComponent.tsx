import './LoginComponent.css';
import { IonInput, IonButton, IonGrid, IonRow, IonCol, IonImg, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [error, setError] = useState<string>('');
  const history = useHistory(); 

  const handleLogin = () => {
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (email === 'teste' && senha === '123') {
      localStorage.setItem('auth', 'true'); 
      history.push('/home'); 
      setError('');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <IonGrid id="container">
      <IonRow className="content">
        <IonCol className="containerInput">
          <div className="containerLogoTitle">
            <IonImg src="../logo.jpg" className="logo" />
            <h1>Entrar na sua conta</h1>
          </div>
          
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="solid"
            placeholder="Digite seu email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />

          <IonInput
            label="Senha"
            type="password"
            labelPlacement="floating"
            fill="solid"
            placeholder="Digite sua senha"
            value={senha}
            onIonChange={e => setSenha(e.detail.value!)} 
          />

          {error && <IonText color="danger"><p>{error}</p></IonText>} 
          <IonButton color="secondary" expand="block" onClick={handleLogin}>Entrar</IonButton>
          
          <div>
            <a href="#">Esqueceu a senha?</a>
          </div>
        </IonCol>

        <IonCol className="img-container">
          <IonImg src="../saude.jpg" className="img-login" alt="Imagem de login" />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default LoginComponent;
