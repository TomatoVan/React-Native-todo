import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {PokemonProps} from '../types/types';
import {clearCurrentPokemon, getPokemonById} from '../../store/rootReducer';
import {useAppDispatch, useAppSelector} from '../../store/store';

export const Details = ({route}: PokemonProps | any) => {

	const dispatch = useAppDispatch()

	const pokemon = useAppSelector(state => state.root.currentPokemon)

	useEffect(() => {
		dispatch(getPokemonById(route.params.url))
		return () => {
			dispatch(clearCurrentPokemon())
		}
	}, []);

	return (
		<View>
			<Text>Details</Text>
			{pokemon && <>
				<Text>{pokemon.name}</Text>
				<Image style={{width: 200, height: 200}} source={{uri: pokemon.sprites.other['official-artwork'].front_default}}/>
			</>
			}
		</View>
	);
};

