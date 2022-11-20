import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from "../Text";

// Components
import { Header } from "../Header/header";
import { Makes } from '../Makes/makes';
import { Catalog } from '../Catalog/catalog';

import { CenteredContainer, Container, Footer, FooterContainer, MakesContainer, VehiclesContainer } from './styles';
import { Button } from '../Button/button';
import { Login } from '../Login/login';
import { ActivityIndicator } from 'react-native';


export function Main() {
  const [LoginVisible, setLoginVisible] = useState(false);
  const [isLoading] = useState(false);

  return (
    <>

      <Login visible={LoginVisible} onClose={() => setLoginVisible(false)} />
      <Container>
        <Header />
        {!isLoading && (
          <>
            <MakesContainer>
              <Makes />
            </MakesContainer>
            <VehiclesContainer>
              <Catalog />
            </VehiclesContainer>
          </>
        )}
        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color={'#21103d'} size={'large'}/>
          </CenteredContainer>
        )}
      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => { setLoginVisible(true) }} >Login</Button>
        </FooterContainer>
      </Footer>

    </>
  )
}