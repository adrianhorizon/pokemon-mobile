import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import Loading from './src/sections/components/loading';
import AppLayout from './src/index';

class App extends Component {
    render() {
        return (
            <StoreProvider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <StatusBar barStyle="dark-content" />
                    <PaperProvider>
                        <AppLayout />
                    </PaperProvider>
                </PersistGate>
            </StoreProvider>
        );
    }
}

export default App;
