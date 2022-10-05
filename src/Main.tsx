import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pokemons} from './screens/Pokemons/Pokemons';
import {Details} from './screens/Details/Details';

const Stack = createNativeStackNavigator();


export const Main = () => {
	return (
			<Stack.Navigator>
				<Stack.Screen name={'Pokemons'} component={Pokemons}/>
				<Stack.Screen name={'Details'} component={Details}/>
			</Stack.Navigator>
	);
};

