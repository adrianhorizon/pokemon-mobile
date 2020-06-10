import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import Loading from './src/sections/components/loading';
import AppLayout from './src/index';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <StatusBar barStyle="dark-content" />
                    <SafeAreaView style={styles.container}>
                        <AppLayout />
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;



