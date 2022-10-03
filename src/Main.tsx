import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home/HomeScreen';
import {DetailsScreen} from './screens/Details/DetailsScreen';
import {UsersScreen} from './screens/Users/UsersScreen';
import {RootStackParamList} from './screens/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => {
	return (
		<View style={styles.container}>
			<Stack.Navigator initialRouteName={'Home'}>
				<Stack.Screen name={'Home'} component={HomeScreen} />
				<Stack.Screen name={'Details'} component={DetailsScreen} />
				<Stack.Screen name={'Users'} component={UsersScreen} />
			</Stack.Navigator>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
