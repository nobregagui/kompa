import './LoginComponent.css';
import { IonInput, IonButton, IonGrid, IonRow, IonCol, IonImg, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleLogin = () => {
    setError('');

    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true); 

    setTimeout(() => {
      if (email === 'teste' && senha === '123') {
        localStorage.setItem('auth', 'true');
        history.push('/home');
        setError('');
      } else {
        setError('Credenciais inválidas');
      }

      setLoading(false); 
    }, 500); 
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <IonGrid id="container">
      <IonRow className="content">
        <IonCol className="containerInput">
          <div className="containerLogoTitle">
            <IonImg src="../logo.png" className="logoLogin" />
            <h1>Entrar na sua conta</h1>
          </div>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="solid"
            placeholder="Digite seu email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            onKeyUp={handleKeyPress}
          />

          <IonInput
            label="Senha"
            type="password"
            labelPlacement="floating"
            fill="solid"
            placeholder="Digite sua senha"
            value={senha}
            onIonChange={e => setSenha(e.detail.value!)}
            onKeyUp={handleKeyPress}
          />

          {error && <IonText color="danger"><p>{error}</p></IonText>}
          
          <IonButton
            color="secondary"
            expand="block"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </IonButton>

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
