import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {root} from './rootReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';


const rootReducer = combineReducers({
	root,
})

// export const store = createStore(rootReducer, applyMiddleware(thunk))
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})

//state typification
export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
//all reducers types
// export type AllAppActionsType = TaskActionsType | TodolistsActionsType | AppActionsType | AuthActionsType

//thunk creator typification
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllAppActionsType>
