import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');

    function Register() {
        if (email == '' || password == '' || firstname == '' || lastname == '') {
            alert('Veuillez remplir tous les champs.');
        } else {
            const register = window.classUsers.register(email, password, firstname, lastname);
            setTimeout(() => {
                if (register.registered === true) {
                    navigation.navigate('Se connecter');
                } else if (register.error === true) {
                    alert(register.message);
                }
            }, 100);
        }
    }

    return(
        <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'col'}}>
            <View style={{ 
                alignItems: 'center', 
                width: 300, 
                justifyContent: 'center', 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                paddingBottom: 10,
            }}>
                <TextInput
                    style={{ 
                        height: 40, 
                        width: 145,
                        borderColor: 'gray', 
                        borderWidth: 0.25,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        padding: 10,
                    }}
                    placeholder="Prénom"
                    autoCapitalize="none"
                    onChangeText={text => setFirstname(text)}
                />
                <TextInput
                    style={{ 
                        height: 40, 
                        width: 145, 
                        borderColor: 'gray', 
                        borderWidth: 0.25,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        padding: 10,
                    }}
                    placeholder="Nom"
                    autoCapitalize="none"
                    onChangeText={text => setLastname(text)}
                />
            </View>
            <TextInput
                style={{ 
                    height: 40, 
                    width: 300, 
                    borderColor: 'gray', 
                    borderWidth: 0.25,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 10,
                }}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={{
                    height: 40,
                    width: 300,
                    borderColor: 'gray',
                    borderWidth: 0.25,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    marginTop: 10,
                    padding: 10,
                }}
                placeholder="Mot de passe"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
        
        <View style={{ 
                marginTop: 10,
                width: 300,
                backgroundColor: '#007fff',
                borderRadius: 5,
                color: '#FFFFFF',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text style={{ 
                    color: '#FFFFFF', 
                    padding: 10,
                    width: 300,
                    textAlign: 'center',
                }} onPress={() => Register()}>S'inscrire</Text>
            </View>

        </View>
    )
}