import React from "react";
import { Text } from "../Text";
import { Container } from "./styles";

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}
export function Button({children, onPress, disabled}: ButtonProps){
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text color="white" weight="600" >{children}</Text>
    </Container>
  )
}