import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { motion } from 'framer-motion';

export default function App() {
  return (
		<View style={styles.container}>
			<Text style={styles.text}>Bork!</Text>
			<motion.div
				drag="x"
				dragConstraints={{ left: -100, right: 100 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }
});
