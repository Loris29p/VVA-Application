import * as React from 'react';
import { View, Text, Button, RefreshControl, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Activities({navigation}) {
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
                                window.classActivities.getActivitiesBySite(user.id_site).map((activity, index) => {
                                    return (
                                        // <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: verticalScale(44), borderBottomWidth: 1, borderBottomColor: '#3D9090' }}>
                                        //     <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>{activity.name}</Text>
                                        //     <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginRight: horizontalScale(16), color: 'gray' }}>{activity.description}</Text>
                                        //     <Ionicons name={
                                        //         window.classUserActivities.isUserActivity(user.id, activity.id) === true ? 'star' : 'star-outline'
                                        //     } size={moderateScale(24)} color="#3D9090" style={{ marginRight: horizontalScale(16) }}
                                        //         onPress={() => {
                                        //             if (window.classUserActivities.isUserActivity(user.id, activity.id) === true) {
                                        //                 window.classUserActivities.removeUserActivity(user.id, activity.id);
                                        //             } else {
                                        //                 window.classUserActivities.addUserActivity(user.id, activity.id);
                                        //             }

                                        //             onRefresh();
                                        //         }}
                                        //     />
                                        // </View>

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
                                                navigation.navigate('Activité', { activity: activity, user: user });
                                            }
                                        }>
                                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                <Text style={{
                                                    fontSize: 16
                                                }}>{activity.name} le {formatDateTime(activity.date)} à {formatHour(activity.hours)} ({window.classUserActivities.getCountUsersFromActivityId(activity.id)}/{activity.max_users})</Text>
                                            </View>
                                            <Ionicons name="chevron-forward-outline" size={24} color="gray"/>

                                        </TouchableOpacity>
                                    )
                                }
                            )}
                        </ScrollView>
                    </View>
                ) : (
                    <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'col'}}>
                        <ScrollView
                            style={{ width: '100%' }}
                            refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                            }>
                            <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>Vous n'êtes pas connecté</Text>
                        </ScrollView>
                    </View>
                )
            }
       </>
    )
}