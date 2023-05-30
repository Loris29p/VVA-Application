import * as React from 'react';
import { View, Text, RefreshControl, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import Ionicons from 'react-native-vector-icons/Ionicons'

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
                                window.classUserActivities.getUserActivitiesByUserId(user.id).map((activity, index) => {
                                    var activityData = window.classActivities.getActivity(activity.id_activity);
                                    return (
                                        <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: verticalScale(44), borderBottomWidth: 1, borderBottomColor: '#3D9090' }}>
                                            <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>{activityData.name}</Text>
                                            <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginRight: horizontalScale(16), color: 'gray' }}>{activityData.description}</Text>
                                            <Ionicons name="ios-information-circle-outline" size={moderateScale(24)} color="#3D9090" style={{ marginRight: horizontalScale(16) }}
                                                onPress={() => {
                                                    navigation.navigate('Activité', { activity: activityData, user: user });
                                                }}
                                            />
                                        </View>
                                    )
                                })
                            }

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