import {MainDetailsPropsType} from '../../types/types';
import {Text, View} from 'react-native';

export function MainDetailsScreen({route}: MainDetailsPropsType) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Main Details Screen</Text>
			<Text>'User id: {route.params.id}'</Text>
		</View>
	);
}