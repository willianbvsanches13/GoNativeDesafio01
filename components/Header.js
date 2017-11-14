import React, { Component } from 'React';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

const Header = (props) => (
	<View style={styles.container}>
		<Text style={styles.title}>{ props.title }</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		height: 60,
	},

	title: {
		textAlign: 'center',
		fontSize: 20,
		color: '#333333',
		paddingTop: 15,
		fontWeight: 'bold'
	},
});

export default Header;