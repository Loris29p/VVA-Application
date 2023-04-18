import * as React from 'react';
import { View, Text } from 'react-native';

export default function Activities({navigation}) {
    return(
        <View style={{ flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => alert('this is the Activities screen.')}
            style={{ fontSize:26, fontWeight: 'bold'}}>
                Activities Screen
            </Text>
        </View>
    )
}