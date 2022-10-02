import {StatusBar} from 'expo-status-bar';
import {FlatList, ListRenderItem, StyleSheet, View, Text, Dimensions} from 'react-native';

type arrDataType = {
	id: number,
	title: string
}

const arrData: arrDataType[] = new Array(20).fill(null).map((_, index) => ({
	id: index + 1,
	title: `Title ${index + 1}`
}))

const {width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height
const PADDING = 30

export default function Lesson1() {

	const render: ListRenderItem<arrDataType> = ({item, index, separators}) => {
		return <View style={styles.item}>
			<Text>{item.title}</Text>
		</View>
	}

	return (
		<View style={styles.container}>

			<FlatList
				contentContainerStyle={{}}
				columnWrapperStyle={{justifyContent: 'space-between'}}
				data={arrData}
				renderItem={render}
				numColumns={2}
				ListHeaderComponent={() => {
					return <View>
						<Text>Filters</Text>
					</View>
				}}
				ListFooterComponent={() => {
					return <View>
						<Text>Footer</Text>
					</View>
				}}
				ListEmptyComponent={() => {
					return <View>
						<Text>zero data</Text>
					</View>
				}}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		paddingHorizontal: PADDING,
		backgroundColor: '#fff',
	},
	input: {
		width: 250,
		height: 40,
		backgroundColor: 'tomato'
	},
	text: {
		backgroundColor: 'blue'
	},
	item: {
		width: ((WIDTH - PADDING * 2) / 2) - 5 ,
		height: ((WIDTH - PADDING * 2) / 2) - 5,
		backgroundColor: 'tomato',
		marginVertical: 5,
	}
});


// const [text, setText] = useState('');

{/*<Text>Open up App.tsx to start working on your app!</Text>
			<ActivityIndicator />
			<ActivityIndicator size="large" />
			<ActivityIndicator size="small" color="#0000ff" />
			<ActivityIndicator size="large" color="#00ff00" />
			<Button
				onPress={() =>{}}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			<Image
				style={{width: 100, height: 100}}
				source={{
					uri: 'https://reactnative.dev/img/tiny_logo.png',
				}}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setText}
				value={text}
			/>
			<Pressable style={{backgroundColor: 'red'}}>
				<Text>I'm pressable 1</Text>
			</Pressable>
			<Pressable style={styles.text}>
				<Text>I'm pressable 2</Text>
			</Pressable>
			<Pressable style={[styles.text, {backgroundColor: 'tomato'}]}>
				<Text>I'm pressable 3</Text>
			</Pressable>
			<TouchableOpacity>
				<Text>12331231</Text>
			</TouchableOpacity>*/}