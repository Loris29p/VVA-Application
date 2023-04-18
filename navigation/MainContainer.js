import * as React from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native';

// Screens
import ActivitiesScreen from './screens/Activities';
import FavoritesScreen from './screens/Favorites';
import ParametersScreen from './screens/Parameters';

// Screen names 
const activitiesName = 'Accueil';
const favoritesName = 'Favories';
const parametersName = 'Paramètres';

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <MainContainer />
        </NavigationContainer>
    );
}

function MainContainer() {
    const navigation = useNavigation();

    return (
        <>
            {/* create button to go to the next screen top right */}
            <Button title='Go to Activities' onPress={() => navigation.navigate('Activities')}/>
            <Button title='Go to Favorites' onPress={() => navigation.navigate('Favorites')}/>

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
        </>
    );
}