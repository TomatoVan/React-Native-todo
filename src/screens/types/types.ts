import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
	Home: undefined;
	Details: undefined;
	Users: undefined;
};

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()