import * as React from 'react';
import SplashScreen from './Components/SplashScreen';
import MainContainer from './navigation/MainContainer';
import { SafeAreaProvider, useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { horizontalScale, moderateScale, verticalScale } from './navigation/utils/Metrics';

import ActivitiesScreen from './navigation/screens/Activities';
import FavoritesScreen from './navigation/screens/Favorites';
import ParametersScreen from './navigation/screens/Parameters';

import { View, Text } from 'react-native';

function Home() {
  return (
    <>
        <View style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            zIndex: 1,
            marginTop: verticalScale(50),
            justifyContent: 'flex-end',
        }}>
            <Ionicons name="person-circle-outline" size={30} color="#3D9090" style={{marginRight: 10}} />
        </View>

        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Activities') {
                iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Favorites') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: '#3D9090',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name="Activities" component={ActivitiesScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Parameters" component={ParametersScreen} />
        </Tab.Navigator>
    </>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;