import * as React from 'react';
import { View, Text, RefreshControl, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Favorites({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [isConnected, setIsConnected] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);

            AsyncStorage.getItem('isConnected').then((response) => {
                if (response !== null) {
                    console.log(JSON.parse(response));
                    setIsConnected(true);
                } else {
                    setIsConnected(false);
                }
            });

            AsyncStorage.getItem('user').then((response) => {
                if (response !== null) {
                    setUser(JSON.parse(response));
                } else {
                    setUser(null);
                }
            });
        }, 2000);
      }, []);
  
    React.useEffect(() => {
        onRefresh();
    }, []);
    
    const formatHour = (hour) => {
        var hour = hour.split(':');
        return hour[0] + 'h' + hour[1];
    }

    const formatDateTime = (date) => {
        var date = date.split(' ');
        var date = date[0].split('-');

        return date[2] + '/' + date[1] + '/' + date[0];
    }

    const tableToCount = (table) => {
        var count = 0;
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== null) {
                count++;
            }
        }
        return count;
    }

    return(
        <>
             {
                isConnected === true && user !== null ? (
                    <View style={{ flex : 1, alignItems: 'center', justifyContent: 'start', display: 'flex', flexDirection: 'col'}}>
                        <ScrollView
                            style={{ width: '100%' }}
                            refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                            }>

                            {
                                tableToCount(window.classUserActivities.getUserActivitiesByUserId(user.id)) > 0 ? (
                                    window.classUserActivities.getUserActivitiesByUserId(user.id).map((activity, index) => {
                                        var activityData = window.classActivities.getActivity(activity.id_activity);
                                        return (
                                            <TouchableOpacity 
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: 10,
                                                marginTop: 10,
                                                marginRight: 10,
                                                marginLeft: 10,
                                                backgroundColor: 'white',
                                                borderRadius: 10,
                                            }}
                                            onPress={
                                                () => {
                                                    navigation.navigate('Activité', { activity: activityData, user: user });
                                                }
                                            }>
                                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <Text style={{
                                                        fontSize: 16
                                                    }}>{activityData.name} le {formatDateTime(activityData.date)} à {formatHour(activityData.hours)} ({window.classUserActivities.getCountUsersFromActivityId(activityData.id)}/{activityData.max_users})</Text>
                                                </View>
                                                <Ionicons name="chevron-forward-outline" size={24} color="gray"/>

                                            </TouchableOpacity>
                                        )
                                    })
                                ) : (
                                    <Text style={{ fontSize: moderateScale(16), textAlign: 'center', fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>Vous n'avez pas d'activités favorites</Text>
                                )
                            }

                        </ScrollView>
                    </View>
                ) : (
                    <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'col'}}>
                        <Text style={{ fontSize: moderateScale(16), textAlign: 'center', fontWeight: 'bold', color: 'gray' }}>Vous devez être connecté pour accéder à cette page.</Text>

                        <Button
                            title="Se connecter"
                            onPress={() => navigation.navigate('Se connecter')}
                        />

                        <Button
                            title="S'inscrire"
                            onPress={() => navigation.navigate("S'inscrire")}
                        />

                        <Button
                            title="Rafraîchir"
                            onPress={() => onRefresh()}
                        />
                    </View>
                )
            }
        </>
    )
}