import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Container, SubTitle, Title } from "./style";
import Button from "../../components/Button";

function WelcomeScreen() {
  return (
    <Container>
      <Image
        source={require("../../assets/images/thunder.png")}
        style={{ width: 444, height: 414 }}
      />
      <Title>Descubra o Clima na sua Cidade</Title>
      <SubTitle>
        Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma
        da sua mão
      </SubTitle>
      <Button
        title="Iniciar"
        backgroundColor="#23262b"
        color="#fff"
        height={54}
        borderRadius="18px"
        fontSize={22}
        borderColor='#838384'
      />
    </Container>
  );
}

export default WelcomeScreen;
