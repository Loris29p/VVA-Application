import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';

export default function Activities({navigation}) {

    const [user, setUser] = React.useState(null);
    const [isConnected, setIsConnected] = React.useState(false);

    AsyncStorage.getItem('isConnected').then((response) => {
        if (response !== null) {
            console.log(JSON.parse(response));
            setIsConnected(true);
        }
    });

    React.useEffect(() => {
        AsyncStorage.getItem('user').then((response) => {
            if (response !== null) {
                setUser(JSON.parse(response));
            }
        });
    }, []);

    return(
       <>
            {
                isConnected === true && user !== null ? (
                    <View style={{ flex : 1, alignItems: 'center', justifyContent: 'start', display: 'flex', flexDirection: 'col'}}>
                        {/* create a list with all window.classActivities.getActivitiesBySite(user.id_site) */}
                        {
                            window.classActivities.getActivitiesBySite(user.id_site).map((activity, index) => {
                                return (
                                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: verticalScale(44), borderBottomWidth: 1, borderBottomColor: '#3D9090' }}>
                                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginLeft: horizontalScale(16), color: 'gray' }}>{activity.name}</Text>
                                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginRight: horizontalScale(16), color: 'gray' }}>{activity.description}</Text>
                                        <Text style={{ fontSize: moderateScale(16), fontWeight: 'bold', marginRight: horizontalScale(16), color: 'gray' }}>{activity.price}</Text>
                                    </View>
                                )
                            }
                        )}
                    </View>
                ) : (
                    <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'col'}}>
                        <Text style={{ fontSize: moderateScale(24), fontWeight: 'bold', marginBottom: verticalScale(16) }}>Activités</Text>
                        <Button
                            title="Se connecter"
                            onPress={() => navigation.navigate('Se connecter')}
                        />
                        <Button
                            title="S'inscrire"
                            onPress={() => navigation.navigate("S'inscrire")}
                        />
                    </View>
                )
            }
       </>
    )
}