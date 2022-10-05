const arrName = ['Ivan', 'Serega', 'Vasya', 'Kolya', 'Sasha', 'Sveta', 'Viktor', 'Dima', 'Alex', 'Pasha']
const arrAge = [12, 15, 18, 25, 37, 41, 19, 11, 47, 50]

export type DataType = {
	id: number,
	name: string,
	age: number
}

export const arr: Array<DataType> = new Array(10).fill(null).map((el, index) => ({
	id: index + 1,
	name: arrName[index],
	age: arrAge[index]
}))