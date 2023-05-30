import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Parameters({navigation}) {
    return(

        <View style={{ flex : 1}}> 

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
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
            }}
            onPress={
                () => navigation.navigate('Activities')
            }>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="person-circle-outline" size={24} color="gray" style={{marginRight: 10}} />
                    <Text style={{
                        fontSize: 16
                    }}>Informations personnelles</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} color="gray"/>

            </TouchableOpacity>

            <TouchableOpacity 
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                marginRight: 10,
                marginLeft: 10,
                borderBottomColor: 'gray',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: 'white',
            }}
            onPress={
                () => navigation.navigate('Activities')
            }>
                <Text style={{fontSize: 16}}>Informations personnelles</Text>
                <Ionicons name="chevron-forward-outline" size={24} color="gray" />

            </TouchableOpacity>

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
                borderRadius: 10,
                backgroundColor: 'white',
                borderBottomColor: 'gray',
                backgroundColor: 'white',
            }}
            onPress={
                () => navigation.navigate('Activities')
            }>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="exit-outline" size={24} color="red" style={{marginRight: 10}} />
                    <Text style={{
                        fontSize: 16,
                        color: 'red'
                    }}>Déconnexion</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
}