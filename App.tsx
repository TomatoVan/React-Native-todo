import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Main} from './src/Main';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
	return (
			<View style={styles.container}>
				<NavigationContainer>
					<Provider store={store}>
						<Main/>
					</Provider>
				<StatusBar style="auto" />
				</NavigationContainer>
			</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 50,
	},
});
