import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import SelectDropdown from 'react-native-select-dropdown'
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';

export default function PersonalInfos({navigation, route}) {

    const Sites = window.classSites.getSites();
    const SitesNames = [];
    Sites.forEach(site => {SitesNames.push(site.name)});
    
    var User = window.classUsers.getUserByEmail(route.params.user.email);
    var UserInfos = {
        id: User.id,
        lastname: User.lastname,
        firstname: User.firstname,
        email: User.email,
        password: User.password,
    }

    return(
        <>
        {
            PersonalInfos !== null ? (
                <View style={{ flex : 1, alignItems: 'left', display: 'flex', flexDirection: 'col'}}>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                        <Text style={{ fontSize: moderateScale(16) }}>Nom : </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, width: horizontalScale(200), marginBottom: verticalScale(16) }}
                            onChangeText={text => UserInfos.lastname = text}
                            defaultValue={route.params.user.lastname}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                        <Text style={{ fontSize: moderateScale(16)}}>Prénom : </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, width: horizontalScale(200), marginBottom: verticalScale(16)  }}
                            onChangeText={text => UserInfos.firstname = text}
                            defaultValue={route.params.user.firstname}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                        <Text style={{ fontSize: moderateScale(16)}}>Email : </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, width: horizontalScale(200), marginBottom: verticalScale(16)  }}
                            onChangeText={text => UserInfos.email = text}
                            defaultValue={route.params.user.email}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                        <Text style={{ fontSize: moderateScale(16)}}>Mot de passe : </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, width: horizontalScale(200), marginBottom: verticalScale(16)  }}
                            onChangeText={text => UserInfos.password = text}
                            defaultValue={"********"}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                        <Text style={{ fontSize: moderateScale(16) }}>Site : </Text>
                        <SelectDropdown
                            data={SitesNames}
                            buttonStyle= {{ borderRadius: 10, backgroundColor: '#c0c0c0' }}
                            defaultValue={route.params.user.site[0].name}
                            onSelect={(selectedItem, index) => {
                                window.classSites.updateSite(index ,selectedItem);
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
                    <Button
                        title="Valider"
                        onPress={() => {
                            window.classUsers.updateUser(UserInfos.id, UserInfos.email, UserInfos.password, UserInfos.firstname, UserInfos.lastname);
                            navigation.navigate('Paramètres');
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