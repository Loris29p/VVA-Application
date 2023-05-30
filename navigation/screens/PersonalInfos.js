import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';

export default function PersonalInfos({navigation, route}) {

    console.log(route.params.user);


    
    return(
        <>
        {
            PersonalInfos !== null ? (
                console.log(PersonalInfos),
                <View style={{ flex : 1, alignItems: 'left', justifyContent: 'start', display: 'flex', flexDirection: 'col'}}>
                    <Text style={{ fontSize: moderateScale(16), marginBottom: verticalScale(16) }}>Nom : {route.params.user.lastname}</Text>
                    <Text style={{ fontSize: moderateScale(16), marginBottom: verticalScale(16) }}>Prénom : {route.params.user.firstname}</Text>
                    <Text style={{ fontSize: moderateScale(16), marginBottom: verticalScale(16) }}>Email : {route.params.user.email}</Text>
                    <Text style={{ fontSize: moderateScale(16), marginBottom: verticalScale(16) }}>Mot de passe : ********</Text>
                    <Text style={{ fontSize: moderateScale(16), marginBottom: verticalScale(16) }}>Site : {PersonalInfos.site}</Text>
                </View>
            ) : (
                <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'col'}}>
                    <Text style={{ fontSize: moderateScale(24), fontWeight: 'bold', marginBottom: verticalScale(16) }}>Informations personnelles</Text>
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