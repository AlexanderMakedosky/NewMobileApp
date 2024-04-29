import React from 'react';

import { Provider } from 'react-redux';
import { store } from './Components/app/store';
import { AppNavigator } from './Components/AppNavigator';

export default function App() {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

