import React from 'react';
import Layout from '../../components/Layout'; 
import Banner from '../../components/BannerComponent';
import DescriptionCard from '../../components/DescriptionCardComponent';
import ActionCard from '../../components/ActionCardComponent';
import './Home.css'
import { menuButtons } from '../../data/menuData';
const Home: React.FC = () => {

  return (
    <Layout menuButtons={menuButtons}>
      <Banner />
      <div className="cards-container">
        <DescriptionCard
          title="Alimentação Saudável"
          subtitle="Dicas Nutricionais"
          description="Uma dieta equilibrada é essencial para manter a saúde em dia. Consuma frutas, legumes e beba bastante água."
        />
        <DescriptionCard
          title="Exercícios Físicos"
          subtitle="Benefícios para o Corpo"
          description="A prática regular de atividades físicas reduz o risco de doenças cardíacas, melhora o humor e fortalece os músculos."
        />
        <DescriptionCard
          title="Saúde Mental"
          subtitle="Cuidando da Mente"
          description="O equilíbrio emocional é fundamental para o bem-estar. Pratique mindfulness, tenha boas noites de sono e busque apoio quando necessário."
        />
      </div>
      <div className="containerCardsAction">
        <ActionCard
          title="Consulta Médica"
          subtitle="Agende sua consulta"
          description="Marque sua consulta médica com nossos especialistas em diversas áreas."
          buttons={[
            { textButton: "Agendar Consulta" },
            { textButton: "Ver Especialidades" },
          ]}
        />
        <ActionCard
          title="Plano de Saúde"
          subtitle="Encontre o melhor plano"
          description="Confira os planos de saúde disponíveis e escolha o melhor para sua família."
          buttons={[
            { textButton: "Consultar Planos" },
            { textButton: "Ver Benefícios" },
          ]}
        />
        <ActionCard
          title="Exames"
          subtitle="Realize seus exames de forma prática"
          description="Agende exames laboratoriais e de imagem para diagnóstico preciso."
          buttons={[
            { textButton: "Agendar Exame" },
            { textButton: "Ver Tipos de Exame" },
          ]}
        />
        <ActionCard
          title="Atendimento de Emergência"
          subtitle="Estamos prontos para atendê-lo"
          description="Em caso de urgência, entre em contato para atendimento imediato."
          buttons={[
            { textButton: "Ligar para Emergência" },
            { textButton: "Ver Unidades" },
          ]}
        />
      </div>
    </Layout>
  );
};

export default Home;
