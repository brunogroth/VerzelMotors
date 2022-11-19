import { Platform, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";

const isAndroid = Platform.OS == 'android';

export const Make = styled.TouchableOpacity`
  background: #4e4d95;
  margin-left: 24px;
  margin-bottom: 8px;
  padding: 5px 10px;
  width: 100px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  box-shadow: 0px 2px 1px rgba(0, 0, 0,  ${isAndroid ?  1 : 0.1});
  elevation: 2;
`;
