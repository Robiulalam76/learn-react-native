import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home/Home';
import Book from './screens/Home/Book/Book';

export default function App() {

  const stack = createStackNavigator()

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Book' title="Book" component={Book} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
