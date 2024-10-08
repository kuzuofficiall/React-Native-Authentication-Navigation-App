import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import OutButton from '../Component/OutButton';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerRight: () => <OutButton  />
      }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
