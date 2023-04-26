import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');

    function Register() {
        window.classDatabase.select("SELECT * FROM users WHERE email = '" + email + "'").then(function(response) {
            console.log(response);
            if (response !== undefined) {
                if (response.data.length > 0) {
                    alert('Cet email est déjà utilisé');
                } else {
                    window.classDatabase.insert("INSERT INTO users (email, password, firstname, lastname) VALUES ('" + email + "', '" + window.classEncryption.encrypt(password) + "', '" + firstname + "', '" + lastname + "')");
                    setTimeout(function() {
                        const responseData = window.classDatabase.select("SELECT * FROM users WHERE email = '" + email + "'");
                        responseData.then(function(response) {
                            if (response !== undefined) {
                                if (response.data.length > 0) {
                                    AsyncStorage.setItem('user', JSON.stringify(response.data[0]));
                                    AsyncStorage.setItem('isConnected', 'true');
                                    // AsyncStorage.getItem('user').then((value) => {
                                    //     console.log(value);
                                    // });
                                    navigation.navigate('Accueil');
                                }
                            }
                        });
                    }, 1000);
                }
            }
        });
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
            <Button
                title="S'inscrire"
                onPress={() => Register()}
            />

        </View>
    )
}