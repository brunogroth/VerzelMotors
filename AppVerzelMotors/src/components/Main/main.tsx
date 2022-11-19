import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from "../Text";

// Components
import { Header } from "../Header/header";
import { Makes } from '../Makes/makes';
import { Catalog } from '../Catalog/catalog';

import { Container, Footer, FooterContainer, MakesContainer, VehiclesContainer } from './styles';

export function Main() {
  return (
    <>
    <Container>
      <Header/>
      <MakesContainer>
        <Makes/>
      </MakesContainer>
      <VehiclesContainer>
        <Catalog/>
      </VehiclesContainer>
    </Container>
    <Footer>
      <FooterContainer/>
    </Footer>

  </>
  )
}