import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import '@react-native-firebase/database';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import MainStack from './src/navigation/MainStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
