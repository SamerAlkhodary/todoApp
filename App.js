import React from 'react';
import Item from './model/Item.js';
import Navigator from './navigation/HomeNavigation';

import {Provider} from 'react-redux';
import Store from './redux/Store.js';

export default function App() {



  return (
    <Provider store={Store}>
         <Navigator navigationOptions={{header:null}}></Navigator>
    </Provider>
 
  
   
  );
}

