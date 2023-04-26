import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { horizontalScale, moderateScale, verticalScale } from './navigation/utils/Metrics';

import ActivitiesScreen from './navigation/screens/Activities';
import FavoritesScreen from './navigation/screens/Favorites';
import LogIn from './navigation/screens/LogIn';
import Register from './navigation/screens/Register';

import { View, Text } from 'react-native';
import OptionsMenu from "react-native-option-menu";

import Database from './navigation/class/Database.class';
import Encryption from './navigation/class/Encryption.class';

window.classDatabase = new Database();
window.classEncryption = new Encryption();

function Home({ navigation }) {
    return (
        <>
            <View style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                zIndex: 1,
                marginTop: verticalScale(64),
                justifyContent: 'flex-end',
            }}>
            <OptionsMenu
                customButton={<Ionicons name="person-circle-outline" size={30} color="#3D9090" 
                style={{
                    marginRight: 10,
                }}/>}
                destructiveIndex={1}
                options={["Se connecter", "S'inscrire", "Retour"]}
                actions={[
                () => {
                    navigation.navigate('Se connecter');
                },
                () => {
                    navigation.navigate("S'inscrire");
                }
                ]}
                />
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
            </Tab.Navigator>
        </>
    );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Se connecter" component={LogIn} />
        <Stack.Screen name="S'inscrire" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;