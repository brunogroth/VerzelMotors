import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

//Componentes
import { Main } from './src/components/Main/main';

export default function App() {

  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if(!isFontsLoaded){
    return null;
  }

  return (
    <Main/>
  );
}
