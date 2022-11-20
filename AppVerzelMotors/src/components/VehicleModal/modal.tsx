import React from "react";
import { Modal, ImageBackground, Linking } from "react-native";
import { vehicles } from "../../mocks/vehicles";
import { Vehicle } from "../../types/Vehicle";
import { Button } from "../Button/button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { CloseButton, Header, Image, VehicleInfo } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

interface VehicleModalProps {
  visible: boolean;
  onClose: () => void;
  vehicle: null | Vehicle;
}

export const ownerNumber = 5541999964650;

export function VehicleModal({ visible, onClose, vehicle }: VehicleModalProps) {
  if (!vehicle) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType={"slide"}
      onRequestClose={onClose}>
      <Image
        source={{
          uri: `http://192.168.0.104:3001/uploads/${vehicle.imagePath}`,
        }}>
        <CloseButton onPress={onClose}><Close /></CloseButton>
      </Image>
      <Header>
        <Text size={28} weight="600">{vehicle.name}</Text>
        <Text size={20} opacity={0.7}>{vehicle.name} {vehicle.model}</Text>
      </Header>
      <VehicleInfo>
        <Text opacity={0.5}>Está buscando por um <Text weight="600">{vehicle.name} {vehicle.model}</Text>?</Text>
        <Text opacity={0.5} style={{marginTop: 12, marginBottom: 24,}}>Não perca tempo: Compre agora com condições especiais, somente no VerzelMotors.</Text>
        <Text size={24} weight="700" style={{marginTop: 8, marginBottom: 24,}}>{formatCurrency(vehicle.price)}</Text>

        <Button onPress={() => Linking.openURL('https://wa.me/+' + ownerNumber + '?text=Olá!%20Tenho%20interesse%20no%20veículo%20*'+ vehicle.name +'%20' + vehicle.model + '*%20que%20vi%20no%20VerzelMotors.')}>Entrar em contato</Button>
      </VehicleInfo>
    </Modal>
  )
}