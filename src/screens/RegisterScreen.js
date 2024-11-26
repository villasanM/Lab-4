import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegistrationForm from '../components/RegistrationForm';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <RegistrationForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
