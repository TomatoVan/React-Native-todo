import {Text, View} from 'react-native';

export function DetailsScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			{/*<Button title={'Link to Users'} onPress={() => navigation.navigate('Users')}/>*/}
		</View>
	);
}