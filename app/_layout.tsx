
import { StatusBar } from 'expo-status-bar';
import { FitnessContext } from './Context';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function RootLayout() {


  return (
    // <NavigationContainer  >
    <FitnessContext>
      <StatusBar style="light" backgroundColor='#000' />
    

      <StackNavigator />
    </FitnessContext>
      // </NavigationContainer>
  );
}
