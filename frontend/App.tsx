import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './screens/MainPage';
import TodoPage from './screens/TodoPage';
import PhoneForm from './screens/PhoneForm';
import VerificationPage from './screens/VerificationPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Main"
          component={MainPage}
          options={{
            title: 'Todo list',
            headerStyle: {
              backgroundColor: '#2f2f2f',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
          />
          <Stack.Screen
          name="Todo"
          component={TodoPage}
          options={{
            title: 'Todo description',
            headerStyle: {
              backgroundColor: '#2f2f2f',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
          />
          <Stack.Screen
          name="PhoneForm"
          component={PhoneForm}
          options={{
            title: 'Phone verification',
            headerStyle: {
              backgroundColor: '#2f2f2f',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
          />
          <Stack.Screen
          name="VerificationPage"
          component={VerificationPage}
          options={{
            title: 'Phone verification',
            headerStyle: {
              backgroundColor: '#2f2f2f',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}