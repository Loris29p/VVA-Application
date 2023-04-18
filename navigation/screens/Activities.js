import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Activities({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Activities Screen</Text>
            <Button
                title="Go to Favorites"
                onPress={() => navigation.navigate('Favorites')}
            />
        </View>
    )
}