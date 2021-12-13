import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Aprendendo Redux</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        margin: 8,
        fontSize: 24,
        alignItems: 'center',
    },
});

export default App;
