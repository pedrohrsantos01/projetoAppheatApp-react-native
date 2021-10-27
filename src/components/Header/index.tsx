import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { UserPhoto } from '../UserPhoto';

import LogoSvg from '../../assets/logo.svg';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

export function Header(){
  const {user} = useAuth()

  return (
    <View style={styles.container}>
        <LogoSvg />
      <View style= {styles.logoutButton}>
        <TouchableOpacity>
        <
          Text style={styles.logoutText}>
            Sair
        </Text>
        </TouchableOpacity>

        <UserPhoto 
        imageUri={user?.avatar_url}
        />
      </View>

    </View>
  );
}