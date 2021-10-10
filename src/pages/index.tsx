import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Professionais"}
        subtitle={
          "Preencha seu endereço  e veja os professionais da sua localidade"
        }
      />

      <TextFieldMask
        mask={"99.999-999"}
        label={"Digite seu CEP"}
        fullWidth
        variant={'outlined'}
      />

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
    </div>
  );
};

export default Home
