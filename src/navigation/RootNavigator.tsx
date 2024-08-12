import { StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from '../../store/AuthContext';

const RootNavigator = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuth ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
