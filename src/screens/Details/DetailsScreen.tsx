import {Button, Text, View} from 'react-native';
import {useAppNavigation} from '../types/types';

export function DetailsScreen() {
	const navigation = useAppNavigation()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Button title={'Link to Users'} onPress={() => navigation.navigate('Users')}/>
		</View>
	);
}