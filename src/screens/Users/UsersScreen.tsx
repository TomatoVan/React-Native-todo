import * as React from 'react';
import {NestedStack} from '../types/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './Main/MainScreen';
import {MainDetailsScreen} from './MainDetails/MainDetailsScreen';

const Stack = createNativeStackNavigator<NestedStack>();

export function UsersScreen() {
	return (
		<Stack.Navigator>
				<Stack.Screen name={'Main'} component={MainScreen}/>
				<Stack.Screen name={'MainDetails'} component={MainDetailsScreen}/>
		</Stack.Navigator>
	);
}