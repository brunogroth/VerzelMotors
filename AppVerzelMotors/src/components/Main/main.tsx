import React, { useState } from 'react';

// Components
import { Header } from "../Header/header";
import { Makes } from '../Makes/makes';
import { Catalog } from '../Catalog/catalog';
import { Button } from '../Button/button';
import { Login } from '../Login/login';
import { Text } from '../Text';

import { CenteredContainer, Container, Footer, FooterContainer, MakesContainer, VehiclesContainer } from './styles';
import { ActivityIndicator } from 'react-native';
import { Vehicle } from '../../types/Vehicle';
import { Empty } from '../Icons/Empty';
import { useEffect } from 'react';
import { Make } from '../../types/Make';

// Import Axios API
import { api } from '../../utils/api';

export function Main() {

  const [LoginModalVisible, setLoginModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [makes, setMakes] = useState<Make[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLogged, setIsLogged] = useState(false);

  async function handleSelectMakes(makeId: string){
    const route = !makeId ? '/vehicles' : `/makes/${makeId}/vehicles`;

    const { data } = await api.get(route);

    setVehicles(data);

  }

  // Recebimento de dados da API
  useEffect(() => {
    Promise.all([
      api.get('/makes'),
      api.get('/vehicles')
    ]).then(([makesResponse, vehiclesResponse]) => {
      setMakes(makesResponse.data);
      setVehicles(vehiclesResponse.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Login visible={LoginModalVisible} onClose={() => setLoginModalVisible(false)} isLogged={() => setIsLogged(true)} />
      <Container>
        <Header isLogged={isLogged} />
        {isLoading ? (
          <>
            <CenteredContainer>
              <ActivityIndicator color={'#21103d'} size={'large'} />
            </CenteredContainer>
          </>

        ) : (
          <>
            <MakesContainer>
              <Makes
              makes={makes}
              onSelectMake={handleSelectMakes}
              />
            </MakesContainer>

            {vehicles.length > 0 ? (
              <VehiclesContainer>
                <Catalog vehicles={vehicles} />
              </VehiclesContainer>
            ) : (
              <CenteredContainer>
                <Empty />
                <Text>Nenhum veículo encontrado!</Text>
              </CenteredContainer>
            )}
          </>
        )}
      </Container>
      {!isLogged && (
        <Footer>
          <FooterContainer>
            <Button onPress={() => { setLoginModalVisible(true) }} >Login</Button>
          </FooterContainer>
        </Footer>
      )}
    </>
  )
}