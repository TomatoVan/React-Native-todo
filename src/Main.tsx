import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreen} from './screens/Home/HomeScreen';
import {DetailsScreen} from './screens/Details/DetailsScreen';
import {UsersScreen} from './screens/Users/UsersScreen';
import {RootStackParamList} from './screens/types/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator<RootStackParamList>();

export const Main = () => {
	return (
		<View style={styles.container}>
			<Tab.Navigator initialRouteName={'Home'} screenOptions={{headerShown: false}}>
				<Tab.Screen name={'Home'} component={HomeScreen} />
				<Tab.Screen name={'Details'} component={DetailsScreen} />
				<Tab.Screen name={'Users'} component={UsersScreen} />
			</Tab.Navigator>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
