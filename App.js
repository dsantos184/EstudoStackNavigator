/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator} from 'react-navigation';

import TelaInicial from './src/pages/TelaInicial';
import Conversa from './src/pages/Conversa';


const navegador = StackNavigator({
  Home:{
    screen: TelaInicial
  },

  Conversa:{
    screen: Conversa
  }
});

export default navegador;
