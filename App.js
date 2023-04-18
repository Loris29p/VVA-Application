import * as React from 'react';
import SplashScreen from './Components/SplashScreen';
import MainContainer from './navigation/MainContainer';
import { SafeAreaProvider, useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";

function App() {
  return(
    <MainContainer></MainContainer>
  );
}

export default App;