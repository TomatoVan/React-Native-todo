import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, Pokemon, PokemonItem} from '../api/api';

export const getAllPokemon = createAsyncThunk<PokemonItem[] | undefined, void>('root/getAllPokemon', async (_,) => {
	try {
	const res = await api.getAllPokemon()
		return res.data.results
	} catch (err) {
		console.log(err)
	} finally {

	}
} )

export const getPokemonById = createAsyncThunk<Pokemon | undefined, string>('root/getPokemonById', async (params, ) => {
	try {
		const res = await api.getPokemonById(params)
		return res.data
	} catch (err) {
		console.log(err)
	}
})

export const clearCurrentPokemon = createAction('root/cleanCurrentPokemon')

const rootSlice = createSlice({
	name: 'root',
	initialState: {
		allPokemons: [] as PokemonItem[],
		currentPokemon: {} as Pokemon
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllPokemon.fulfilled, (state, action) => {
		state.allPokemons = action.payload ? action.payload : []
		})
			.addCase(getPokemonById.fulfilled, (state, action) => {
			state.currentPokemon = action.payload ? action.payload : {} as Pokemon
		})
			.addCase(clearCurrentPokemon, (state) => {
				state.currentPokemon = {} as Pokemon
			})
	}
})

export const root = rootSlice.reducer