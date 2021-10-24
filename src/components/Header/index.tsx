import React from 'react';
import {
  View,
  Text
} from 'react-native';

import LogoSvg from '../../assets/logo.svg';

import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.container}>
        <LogoSvg />
        <Text>Sair</Text>

    </View>
  );
}