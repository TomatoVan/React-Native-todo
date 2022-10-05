import {useAppNavigation} from '../../types/types';
import {FlatList, ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import {arr, DataType} from '../../../data/data';

export function MainScreen() {

	const navigation = useAppNavigation()

	const render: ListRenderItem<DataType> = ({item}) => {
		return <View>
			<TouchableOpacity onPress={() => navigation.navigate('Users', {screen: 'MainDetails', params: {id: item.id}})}>
				<Text>{item.name}</Text>
				<Text>{item.age}</Text>
			</TouchableOpacity>
		</View>
	}

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<FlatList
				data={arr}
				renderItem={render}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}