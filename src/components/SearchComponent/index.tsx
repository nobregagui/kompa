import React from "react";
import { IonSearchbar } from "@ionic/react";

interface SearchProps {
  value: string;
  onSearch: (value: string) => void;
}

const SearchComponent: React.FC<SearchProps> = ({ value, onSearch }) => {
  return (
    <IonSearchbar
      placeholder="Pesquisar paciente"
      color="dark"
      value={value}
      onIonInput={(e) => onSearch(e.detail.value!)}
    />
  );
};

export default SearchComponent;
