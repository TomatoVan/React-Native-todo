import {CompositeScreenProps, NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
	Home: undefined;
	Details: undefined;
	Users: NavigatorScreenParams<NestedStack>
};

export type NestedStack = {
	Main: undefined,
	MainDetails: {
		id: number
	}
}

// export type MainDetailsPropsType_ = NativeStackScreenProps<NestedStack, 'MainDetails'>

export type MainDetailsPropsType = CompositeScreenProps<
	BottomTabScreenProps<NestedStack, 'MainDetails'>,
	StackScreenProps<RootStackParamList>
	>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()