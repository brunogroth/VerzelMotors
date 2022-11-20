import React from "react";
import { View } from "react-native";
import { Button } from "../Button/button";
import { Text } from "../Text";
import { Container } from "./styles";

interface HeaderProps{
  isLogged:boolean;
}

export function Header({isLogged}:HeaderProps) {
  return (
    <Container>
      <View>
        <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
        <Text size={24} weight="700">VERZEL<Text size={24}>Motors.</Text></Text>
      </View>
      { isLogged &&
        <Button onPress={() => { null }}>Criar Veículo</Button>
      }
    </Container>

  )
}