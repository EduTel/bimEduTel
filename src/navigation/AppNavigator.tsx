import { createStackNavigator } from '@react-navigation/stack';
import { AccountsScreen } from '../screens/AccountsScreen';
import { AccountDetail } from '../screens/AccountDetail';
const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accounts" component={AccountsScreen} />
      <Stack.Screen name="AccountDetail" component={AccountDetail} />
    </Stack.Navigator>
  );
};
