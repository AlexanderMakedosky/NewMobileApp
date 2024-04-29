import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './Main';
import { GalleryModal } from './GalleryItem/GalleryModal';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Gallery" component={Main} />
         <Stack.Screen name="Photo" component={GalleryModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
