import {Button, Text, View} from 'react-native';
import * as React from 'react';
import {useAppNavigation} from '../types/types';

export function UsersScreen() {
	const navigation = useAppNavigation()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Users Screen</Text>
			<Button title={'Link to Home'} onPress={() => navigation.navigate('Home')}/>
		</View>
	);
}