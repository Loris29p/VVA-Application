import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogIn({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function LogIn() {
        if (email === '' || password === '') {
            alert('Veuillez remplir tous les champs');
        } else {
            const login = window.classUsers.login(email, password);
            setTimeout(() => {
                if (login.logged === true) {
                    navigation.navigate('Accueil');
                } else if (login.error === true) {
                    alert(login.message);
                }
            }, 100);
        }

        // window.classDatabase.select("SELECT * FROM users WHERE email = '" + email + "'").then(function(response) {
        //     if (response !== undefined) {
        //         if (response.data.length > 0) {
        //             if (window.classEncryption.decrypt(response.data[0].password) === password) {
        //                 AsyncStorage.setItem('user', JSON.stringify(response.data[0]));
        //                 AsyncStorage.setItem('isConnected', 'true');
        //                 navigation.navigate('Accueil');
        //             } else {
        //                 alert('Mot de passe incorrect');
        //             }
        //         } else {
        //             alert('Cet email n\'existe pas');
        //         }
        //     }
        // });
    }

    return(
        <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'col'}}>
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
            <View style={{ marginTop: 10 }}>
                <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Mot de passe oublié')}>Mot de passe oublié ?</Text>
            </View>
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
                }} onPress={() => LogIn()}>Se connecter</Text>
            </View>

        </View>
    )
}