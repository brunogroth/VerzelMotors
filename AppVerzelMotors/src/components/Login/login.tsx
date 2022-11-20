import React from "react";
import { useState } from "react";
import { Modal, TextInput, Linking } from "react-native";
import SvgUri from "react-native-svg-uri";
import { Button } from "../Button/button";
import { CheckCircle } from "../Icons/CheckCircle";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { CloseButton } from "../VehicleModal/styles";
import { Container, Content, LoginFooter, LoginForm } from "./styles";

interface LoginProps {
  visible: boolean;
  onClose: () => void;
}

export function Login({ visible, onClose }: LoginProps) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  function handleLogin() {
    if (login && password) {
      alert('Bem vindo ao VerzelMotors, ' + login + '! Login efetuado.')
      onClose();
    } else {
      alert('Por gentileza, informe Login e Senha para prosseguir.');
    }
  }

  return (

    <Modal
      visible={visible}
      animationType={"slide"}
      onRequestClose={onClose}>
      <Container>
        <CloseButton onPress={onClose}><Close /></CloseButton>

        <Content>
          <SvgUri source={{ uri: 'https://verzel.com.br/static/media/icon_verzel_logo.b730ce46.svg' }} />
          <Text color="white" weight="700" size={21} style={{ marginVertical: 25, }}>Login do usuário</Text>
          <LoginForm>
            <Text style={{ marginTop: 30 }}>Login</Text>
            <TextInput placeholder="Informe seu usuário aqui" onChangeText={setLogin} style={{ borderBottomWidth: 1, borderBottomColor: '#25cbd3', marginVertical: 15 }}></TextInput>
            <Text style={{ marginTop: 30 }}>Senha</Text>
            <TextInput secureTextEntry={true} placeholder="Informe sua senha aqui" onChangeText={setPassword} style={{ borderBottomWidth: 1, borderBottomColor: '#25cbd3', marginVertical: 15 }}></TextInput>
            <Text size={12} onPress={() => Linking.openURL('https://verzel.com.br')}>Não possui login?</Text>
            <LoginFooter>
            <Button onPress={handleLogin}>Login</Button>
          </LoginFooter>
          </LoginForm>

        </Content>
      </Container>
    </Modal>
  )
}