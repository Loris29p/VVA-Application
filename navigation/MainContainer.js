import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


// Screens
import ActivitiesScreen from './screens/Activities';
import FavoritesScreen from './screens/Favorites';
// import ParametersScreen from './screens/Parameters';

// Screen names 
const activitiesName = 'Accueil';
const favoritesName = 'Favories';
// const parametersName = 'Paramètres';

const BottomTab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator 
            initialRouteName='activitiesName'
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === activitiesName) (
                        iconName = focused ? 'home' : 'home-outline'
                    )
                    else if (rn === favoritesName) {
                        iconName = focused ? 'list' : 'list-outline'
                    }
                    // else if (rn === parametersName) {
                    //     iconName = focused ? 'settings' : 'settings-outline'
                    // }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>

            <BottomTab.Screen name={activitiesName} component={ActivitiesScreen}/>
            <BottomTab.Screen name={favoritesName} component={FavoritesScreen}/>
            {/* <Tab.Screen name={parametersName} component={ParametersScreen}/> */}

                
            </BottomTab.Navigator>

        </NavigationContainer>
    )
}