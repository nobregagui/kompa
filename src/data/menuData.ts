export const menuButtons = [
    {
      textButton: "Produtos",
    },
    {
      textButton: "Clientes",
    },
    {
      textButton: "Financeiro",
    },
    {
      textButton: "Pacientes",
      buttonChildren: [
        { textButton: "Meus pacientes", link: "/pacientes" },
        { textButton: "Em acompanhamento", link: "/pacientesEmAcompanhamento" },
      ],
    },
  ];
  