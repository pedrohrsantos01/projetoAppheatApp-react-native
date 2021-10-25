import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.BLACK_SECONDARY,
        paddingTop: getStatusBarHeight() + 17
    }
});