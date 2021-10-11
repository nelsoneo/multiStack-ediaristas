import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormElementsContainer,
  ProfessionaisPaper,
  ProfessionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {

  const { cep, setCep } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Professionais"}
        subtitle={
          "Preencha seu endereço  e veja os professionais da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
         
          <Typography color={"error"}>CEP inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfessionaisPaper>
          <ProfessionaisContainer>
            <UserInformation
              name={"Nelson Hernandez"}
              picture={"https://github.com/nelsoneo.png"}
              rating={4}
              description={"Rio Grande do Sul"}
            />
            <UserInformation
              name={"Daniel Hernandez Puig"}
              picture={"img/danielMySon.png"}
              rating={5}
              description={"La Habana"}
            />
          </ProfessionaisContainer>
        </ProfessionaisPaper>
      </Container>

    </div>
  );
};

export default Home
