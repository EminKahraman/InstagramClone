import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import '@react-native-firebase/database';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
