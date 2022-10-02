import React, {useState} from 'react';
import {Dimensions, FlatList, ListRenderItem, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MySvgComponent} from './svg/MySvg';

type TaskType = {
	key: number,
	title: string,
	isDone: boolean
}

const {width, height} = Dimensions.get('screen')

const generateId = () => {
	return Math.floor(new Date().valueOf() * Math.random())
}

const WIDTH = width
const HEIGHT = height
const PADDING = 10

export const Main = () => {

	const [tasks, setTasks] = useState<TaskType[]>([
		{
			key: generateId(),
			title: 'HTML',
			isDone: true
		},
		{
			key: generateId(),
			title: 'React',
			isDone: true
		},
		{
			key: generateId(),
			title: 'React-native',
			isDone: false
		}
	]);

	const [title, setTitle] = useState('');

	const render: ListRenderItem<TaskType> = ({item, index, separators}) => {
		return <View style={[styles.itemBlock, {opacity: item.isDone ? 0.5 : 1}]}>
			<View style={styles.item}>
				<Text style={[styles.title, {textDecorationLine: item.isDone ? 'line-through' : 'none'}]}>{item.title}</Text>
					<TouchableOpacity style={styles.isDone} onPress={() => updateItemHandler(item.key)}>
						<Text>{item.isDone ? 'true' : 'false'}</Text>
					</TouchableOpacity>

			</View>
			<TouchableOpacity onPress={() => removeItemHandler(item.key)}>
				<MySvgComponent/>
			</TouchableOpacity>
		</View>
	}

	const addItemHandler = () => {
		if (title.trim() !== '') {
			const newTask = { key: generateId(), title: title.trim(), isDone: false}
			setTasks([...tasks, newTask])
			setTitle('')
		}
	}

	const removeItemHandler = (key: number) => {
		setTasks(tasks.filter((el) => el.key !== key))
	}

	const updateItemHandler = (key: number) => {
		setTasks(tasks.map((el) => el.key === key ? {...el, isDone: !el.isDone} : el))
	}

	return (
		<View>
			<View style={styles.header}>
				<TextInput value={title} onChangeText={setTitle} style={styles.input}/>
				<TouchableOpacity  onPress={addItemHandler}>
					<Text>ADD</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={tasks}
				renderItem={render}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		width: ((WIDTH - PADDING * 2)) - 25 ,
		backgroundColor: '#ef8080',
		paddingHorizontal: 10,
		paddingVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 5,
		borderWidth: 1,
		borderRadius: 5
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		letterSpacing: 3,
	},
	input : {
		width: 200,
		height: 30,
		borderWidth: 1,
		borderRadius: 5
	},
	header : {
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	itemBlock: {
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	isDone: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		height: 30,
		backgroundColor: '#5aab46',
		borderWidth: 1,
		borderRadius: 5
	}
})
