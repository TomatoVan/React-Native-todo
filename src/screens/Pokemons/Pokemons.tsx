import React, {useEffect} from 'react';
import {Dimensions, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PokemonItem} from '../../api/api';
import {useAppNavigation} from '../types/types';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {getAllPokemon} from '../../store/rootReducer';


const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height
const PADDING = 30

export const Pokemons = () => {

	const navigation = useAppNavigation()

	const dispatch = useAppDispatch()

	const allPokemons = useAppSelector(state => state.root.allPokemons)

	useEffect(() => {

		dispatch(getAllPokemon())
	}, []);

	const render: ListRenderItem<PokemonItem> = ({item, index, separators}) => {
		return <TouchableOpacity
			onPress={() => navigation.navigate('Details', {url: item.url})}
			activeOpacity={0.7}
			style={styles.item}>
			<Text style={styles.text}>{item.name}</Text>
		</TouchableOpacity>
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={allPokemons}
				columnWrapperStyle={{justifyContent: 'space-between'}}
				renderItem={render}
				numColumns={2}
				keyExtractor={(item, index) => `${item.name}.${index}`}
			>

			</FlatList>
			{/*<Text>{JSON.stringify(pokemons, null, 2)}</Text>*/}
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		paddingHorizontal: PADDING,
		backgroundColor: '#fff',
	},
	item: {
		backgroundColor: 'tomato',
		paddingVertical: 6,
		paddingHorizontal: 10,
		marginVertical: 5,
		width: (WIDTH - (PADDING * 2)) / 2 - 10,
		borderWidth: 1,
		borderRadius: 5,
		alignItems: 'center'

	},
	text: {
		fontSize: 18,
		fontWeight: '500'
	}
});

