import { useState } from "react";
import { UserShorInterface } from "data/@types/UserInterface";

export default function useIndex() {
    const [cep, setCep] = useState(""),
      [erro, setErro] = useState(""),
      [buscaFeita, setBuscaFeita] = useState(false),
      [carregando, setCarregando] = useState(false),
      [diarista, setDiarista] = useState([] as UserShorInterface[]);

    return {
        cep,
        setCep
    }
}
