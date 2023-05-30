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
<<<<<<< HEAD
import LogIn from './navigation/screens/LogIn';
import Register from './navigation/screens/Register';
=======
import ParametersScreen from './navigation/screens/Parameters';
>>>>>>> createParameters

import { View, Text } from 'react-native';
import OptionsMenu from "react-native-option-menu";

<<<<<<< HEAD
import Database from './navigation/class/Database.class';
import Encryption from './navigation/class/Encryption.class';
import Users from './navigation/class/Users.class';
import Sites from './navigation/class/Sites.class';
import Types from './navigation/class/Types.class';
import Animations from './navigation/class/Animations.class';
import Activities from './navigation/class/Activities.class';
import UserActivities from './navigation/class/UsersActivities.class';

window.classDatabase = new Database();
window.classUsers = new Users();
window.classEncryption = new Encryption();
window.classSites = new Sites();
window.classTypes = new Types();
window.classAnimations = new Animations();
window.classActivities = new Activities();
window.classUserActivities = new UserActivities();

function Home({ navigation }) {

    const [user, setUser] = React.useState(null);
    const [isConnected, setIsConnected] = React.useState(false);

    AsyncStorage.getItem('isConnected').then((response) => {
        if (response !== null) {
            setIsConnected(true);
        }
    });

    React.useEffect(() => {
        AsyncStorage.getItem('user').then((response) => {
            if (response !== null) {
                setUser(JSON.parse(response));
=======
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
>>>>>>> createParameters
            }
        });
    }, []);

<<<<<<< HEAD
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

                {
                    isConnected === true ? (
                        <OptionsMenu
                        customButton={<Ionicons name="person-circle-outline" size={30} color="#3D9090" 
                        style={{
                            marginRight: 10,
                        }}/>}
                        destructiveIndex={1}
                        options={["Se déconnecter", "Retour"]}
                        actions={[
                        () => {
                            AsyncStorage.removeItem('user');
                            AsyncStorage.removeItem('isConnected');
                            setIsConnected(false);
                            setUser(null);
                        },
                        () => {
                            navigation.navigate('Activités');
                        }
                        ]}
                        />
                    ) : (
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
                    )
                }
            </View>

            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Activités') {
                    iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                } else if (route.name === 'Favoris') {
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
                <Tab.Screen name="Activités" component={ActivitiesScreen} />
                <Tab.Screen name="Favoris" component={FavoritesScreen} />
            </Tab.Navigator>
        </>
    );
=======
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
>>>>>>> createParameters
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
<<<<<<< HEAD
        <Stack.Screen name="Activités" component={ActivitiesScreen} />
        <Stack.Screen name="Favoris" component={FavoritesScreen} />
        <Stack.Screen name="Se connecter" component={LogIn} />
        <Stack.Screen name="S'inscrire" component={Register} />
=======
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />

>>>>>>> createParameters
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;