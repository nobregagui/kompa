import axios from "axios";

export interface IUserData {
  id: number;
  data: { label: string; value: string; action?: boolean }[];
}

export const fetchUsers = async (): Promise<IUserData[]> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/users");

    console.log("Dados:", response.data);

    if (response.data.length > 0) {
      return response.data.map((user: any) => ({
        id: user.id,
        data: [
          {
            label: "Nome",
            value: `${user.name.firstname} ${user.name.lastname}`,
          },
          { label: "Email", value: user.email },
          { label: "Telefone", value: user.phone },
          { label: "Nome de Usuário", value: user.username }, 
          { label: "Endereço", value: `${user.address.street}, ${user.address.city}, ${user.address.zipcode}` }, 
        ],
      }));
    }

    return [];
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
};
