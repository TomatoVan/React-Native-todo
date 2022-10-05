import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
	Home: undefined;
	Details: {url: string}
};

export type PokemonProps = NativeStackScreenProps<RootStackParamList, 'Details'>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()