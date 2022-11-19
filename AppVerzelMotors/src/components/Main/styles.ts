import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS == 'android';

export const Container = styled.View`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'}
  flex: 1;
  background-color: '#FAFAFA';
`;

export const MakesContainer = styled.View`
  height: 50px;
  margin-top: 32px;
`;

export const VehiclesContainer = styled.View`
  flex: 1;
`;
export const FooterContainer = styled.SafeAreaView``;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
`;