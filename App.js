import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import MainStack from './src/navigation/MainStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
