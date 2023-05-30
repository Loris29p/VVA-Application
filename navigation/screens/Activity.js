import * as React from 'react';
import { View, Text, Button, RefreshControl, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Activity({navigation, route}) {
    console.log(route.params.activity);
}