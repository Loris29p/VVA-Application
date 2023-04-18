import * as React from 'react';
import { View, Text } from 'react-native';

export default function Parameters({navigation}) {
    return(
        <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => alert('this is the Parameters screen.')}
            style={{ fontSize:26, fontWeight: 'bold'}}>
                Parameters Screen
            </Text>
        </View>
    )
}