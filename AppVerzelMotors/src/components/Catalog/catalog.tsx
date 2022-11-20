import React from "react";
import { FlatList } from "react-native";
import { vehicles } from "../../mocks/vehicles";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button/button";
import { Text } from "../Text";

import { Vehicle, Image, VehicleDetails, Separator } from './styles';

export function Catalog(){
  return (
    <FlatList
      data={vehicles.sort(function (obj1, obj2) {
        return  obj2.price - obj1.price;
      })}
      contentContainerStyle = {{marginTop: 32, paddingHorizontal: 24}}
      keyExtractor={vehicle => vehicle._id}
      ItemSeparatorComponent = {Separator}
      renderItem= {({item: vehicle}) => (
        <Vehicle>
          <Image
          source={{
            uri: `http://192.168.0.104:3001/uploads/${vehicle.imagePath}`,
          }} />
          <VehicleDetails>
            <Text weight="600">{vehicle.name}</Text>
            <Text size={14} color="#6666" style={{marginVertical:8}}>{vehicle.model}</Text>
            <Text weight="600" size={14}>{formatCurrency(vehicle.price)}</Text>
          </VehicleDetails>
          <Button onPress={()=> {null}}>Ver Mais</Button>
        </Vehicle>
      )}
    />

  );
}