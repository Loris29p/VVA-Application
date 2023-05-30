import * as React from 'react';
import { View, Text, Button, RefreshControl, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Activity({navigation, route}) {

    const formatHour = (hour) => {
        var hour = hour.split(':');
        return hour[0] + 'h' + hour[1];
    }

    const formatDateTime = (date) => {
        var date = date.split(' ');
        var date = date[0].split('-');
        
        return date[2] + '/' + date[1] + '/' + date[0];
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({ title: route.params.activity.name });
    }, [navigation, route]);

    return(
        <>
            <View style={{ flex : 1, alignItems: 'center', justifyContent: 'start', display: 'flex', flexDirection: 'col'}}>
                <ScrollView
                    style={{ width: '100%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: verticalScale(44), borderBottomWidth: 1, borderBottomColor: '#3D9090', justifyContent: 'flex-end' }}>
                    <Ionicons name={
                        window.classUserActivities.isUserActivity(route.params.user.id, route.params.activity.id) === true ? 'star' : 'star-outline'
                    } size={moderateScale(24)} color="#3D9090" style={{ marginRight: horizontalScale(16) }}
                        onPress={() => {
                            if (window.classUserActivities.isUserActivity(route.params.user.id, route.params.activity.id) === true) {
                                window.classUserActivities.removeUserActivity(route.params.user.id, route.params.activity.id);
                            } else {
                                window.classUserActivities.addUserActivity(route.params.user.id, route.params.activity.id);
                            }

                            navigation.goBack();
                        }}
                        key={route.params.activity.id}
                    />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: verticalScale(44), borderBottomWidth: 1, borderBottomColor: '#3D9090' }}>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>Description</Text>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginRight: horizontalScale(16), color: 'gray' }}>{route.params.activity.description}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: verticalScale(44), borderBottomWidth: 1, borderBottomColor: '#3D9090' }}>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>Date</Text>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginRight: horizontalScale(16), color: 'gray' }}>{formatDateTime(route.params.activity.date)}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: verticalScale(44), borderBottomWidth: 1, borderBottomColor: '#3D9090' }}>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>Heure</Text>
                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginRight: horizontalScale(16), color: 'gray' }}>{formatHour(route.params.activity.hours)}</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}