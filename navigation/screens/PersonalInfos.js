import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import SelectDropdown from 'react-native-select-dropdown'

export default function PersonalInfos({navigation, route}) {

    console.log(route.params.user);


    const countries = ["Egypt", "Canada", "Australia", "Ireland"]

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

                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />
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