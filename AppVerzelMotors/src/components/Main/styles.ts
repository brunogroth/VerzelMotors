import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS == 'android';

export const Container = styled.View`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'}
  flex: 1;
  background-color: #eee;
  marginBot: 125px;
`;

export const MakesContainer = styled.View`
  height: 60px;
  margin-top: 32px;
`;

export const VehiclesContainer = styled.SafeAreaView`
  flex: 1;
  background: #eaeaea;
`;

export const Footer = styled.View`
  min-height: 90px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.View``;

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
