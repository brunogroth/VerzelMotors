import React from "react";
import { FlatList } from "react-native";
import { useState } from "react";

import { Text } from "../Text";
import { MakeContainer } from "./styles";
import { Make } from "../../types/Make";

interface makesProps {
  makes:Make[],
  onSelectMake: (makeId: string) => Promise<void>;
}
export function Makes({makes, onSelectMake}:makesProps){

  const [selectedMake, setSeletedMake] = useState("");

    function handleSelectMake(makeId: string){
      // If selectedMake = '', any make has been selected so all of them gonna be shown.
      const make = selectedMake == makeId ? '' : makeId;
    setSeletedMake(make); // Somente componente visual
    onSelectMake(make); // Requisição da API
    }
  return (
    <FlatList
    contentContainerStyle={{paddingRight: 24 }}
    showsHorizontalScrollIndicator={false}
    horizontal
    data={makes}
    keyExtractor={make => make._id}
    renderItem={( {item: make} ) => {
      const isSelected = selectedMake === make._id || selectedMake === '';
      return (

      <MakeContainer onPress={() => {handleSelectMake(make._id)}}>
        <Text opacity={isSelected ? 1 : 0.2} color="white">{make.name}</Text>
      </MakeContainer>
    )}

  }/>
  )
}