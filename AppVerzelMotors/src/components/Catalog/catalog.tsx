import React from "react";
import { useState } from "react";
import { FlatList, Linking } from "react-native";
import { vehicles } from "../../mocks/vehicles";
import { Vehicle } from "../../types/Vehicle";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button/button";
import { Text } from "../Text";
import { VehicleModal } from "../VehicleModal/modal";

import { VehicleContainer, Image, VehicleDetails, Separator } from './styles';

export function Catalog() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<null | Vehicle>(null);
  const ownerNumber = 5541999964650;

  function handleOpenModal(vehicle: Vehicle){
    setIsModalVisible(true);
    setSelectedVehicle(vehicle);
    console.log(vehicle);
  }
  return (
    <>
       <VehicleModal visible={isModalVisible ? true : false} onClose={() => setIsModalVisible(false)} vehicle={selectedVehicle}></VehicleModal>
      <FlatList
        data={vehicles.sort(function (obj1, obj2) {
          return obj2.price - obj1.price;
        })}
        contentContainerStyle={{ marginTop: 32, paddingHorizontal: 24 }}
        keyExtractor={vehicle => vehicle._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: vehicle }) => (
          <VehicleContainer onPress={() => handleOpenModal(vehicle)}>
            <Image
              source={{
                uri: `http://192.168.0.104:3001/uploads/${vehicle.imagePath}`,
              }} />
            <VehicleDetails>
              <Text weight="600">{vehicle.name}</Text>
              <Text size={14} color="#6666" style={{ marginVertical: 8 }}>{vehicle.model}</Text>
              <Text weight="600" size={14}>{formatCurrency(vehicle.price)}</Text>
            </VehicleDetails>
            <Button onPress={() => Linking.openURL('https://wa.me/+' + ownerNumber + '?text=Olá!%20Tenho%20interesse%20no%20veículo%20*'+ vehicle.name +'%20' + vehicle.model + '*%20que%20vi%20no%20VerzelMotors.')}>Comprar</Button>
          </VehicleContainer>
        )}
      />

    </>

  );
}