import React from "react";
import { FlatList } from "react-native";
import { useState } from "react";


import { makes } from "../../mocks/makes";
import { Text } from "../Text";
import { Make } from "./styles";

export function Makes(){

  const [selectedMake, setSeletedMake] = useState("");

    function handleSelectMake(makeId: string){
      // If selectedMake = '', any make has been selected so all of them gonna be shown.
      const make = selectedMake == makeId ? '' : makeId;
    setSeletedMake(make);

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

      <Make onPress={() => {handleSelectMake(make._id)}}>
        <Text opacity={isSelected ? 1 : 0.2} color="white">{make.name}</Text>
      </Make>
    )}

  }/>
  )
}